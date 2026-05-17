// ============================================================
// THE BLACK MOLD GUY — CRM Backend (Google Apps Script)
// Deploy this as a Web App in Google Apps Script:
// 1. Extensions → Apps Script
// 2. Paste this code, save
// 3. Deploy → New Deployment → Web App
// 4. Execute as: Me | Who has access: Anyone
// 5. Copy the Web App URL into crm.html and index.html
// ============================================================

const SHEET_NAME = 'Leads';
const STATUSES = [
  'New Lead','Contacted','Consult Booked','Consult Done',
  'Job Sold','No Sale - Follow Up','Job Complete','Review Sent'
];

// Column positions (1-indexed)
const COL = {
  ID: 1, CREATED: 2, NAME: 3, EMAIL: 4, PHONE: 5,
  STATUS: 6, SERVICE: 7, SOURCE: 8, NOTES: 9,
  SEQ_NAME: 10, SEQ_START: 11, NEXT_EMAIL: 12, EMAIL_STEP: 13
};

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    // Set headers
    sheet.getRange(1, 1, 1, 13).setValues([[
      'ID','Created','Name','Email','Phone','Status',
      'Service','Source','Notes','Seq Name','Seq Start','Next Email','Email Step'
    ]]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, 13).setBackground('#1a3a2a').setFontColor('white').setFontWeight('bold');
  }
  return sheet;
}

function doGet(e) {
  const action = (e.parameter.action || 'getLeads');
  try {
    let result;
    if (action === 'getLeads')      result = getLeads();
    else if (action === 'addLead')  result = addLead(e.parameter);
    else if (action === 'updateStatus') result = updateStatus(e.parameter);
    else result = {error: 'Unknown action: ' + action};
    return respond(result);
  } catch(err) {
    return respond({error: err.toString()});
  }
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    let result;
    if (data.action === 'addLead')         result = addLead(data);
    else if (data.action === 'updateStatus') result = updateStatus(data);
    else if (data.action === 'saveNotes')    result = saveNotes(data);
    else result = {error: 'Unknown action'};
    return respond(result);
  } catch(err) {
    return respond({error: err.toString()});
  }
}

function respond(data) {
  const output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

// ─── GET ALL LEADS ────────────────────────────────────────────
function getLeads() {
  const sheet = getSheet();
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) return {results: []};

  const data = sheet.getRange(2, 1, lastRow - 1, 13).getValues();
  const leads = data
    .filter(row => row[0]) // has an ID
    .map(row => ({
      id:         row[COL.ID - 1],
      created:    row[COL.CREATED - 1],
      name:       row[COL.NAME - 1],
      email:      row[COL.EMAIL - 1],
      phone:      row[COL.PHONE - 1],
      status:     row[COL.STATUS - 1] || 'New Lead',
      service:    row[COL.SERVICE - 1],
      source:     row[COL.SOURCE - 1],
      notes:      row[COL.NOTES - 1],
      seq_name:   row[COL.SEQ_NAME - 1],
      seq_start:  row[COL.SEQ_START - 1],
      next_email: row[COL.NEXT_EMAIL - 1],
      email_step: row[COL.EMAIL_STEP - 1]
    }));

  return {results: leads};
}

// ─── ADD LEAD ─────────────────────────────────────────────────
function addLead(data) {
  const sheet = getSheet();
  const id = Utilities.getUuid();
  const now = new Date().toISOString();

  sheet.appendRow([
    id,
    now,
    data.name    || '',
    data.email   || '',
    data.phone   || '',
    'New Lead',
    data.service || '',
    data.source  || 'Website',
    data.message || data.notes || '',
    '', '', '', 0
  ]);

  return {success: true, id, created: now};
}

// ─── UPDATE STATUS ────────────────────────────────────────────
function updateStatus(data) {
  const sheet = getSheet();
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) return {error: 'No leads found'};

  const ids = sheet.getRange(2, COL.ID, lastRow - 1, 1).getValues();
  const rowIdx = ids.findIndex(r => r[0] === data.id);
  if (rowIdx === -1) return {error: 'Lead not found: ' + data.id};

  const sheetRow = rowIdx + 2; // +2 because data starts at row 2
  sheet.getRange(sheetRow, COL.STATUS).setValue(data.status);

  // Notes update (optional)
  if (data.notes !== undefined && data.notes !== null) {
    sheet.getRange(sheetRow, COL.NOTES).setValue(data.notes);
  }

  // Auto-start email sequence when moved to No Sale - Follow Up
  if (data.status === 'No Sale - Follow Up') {
    const today = new Date();
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + 2);
    sheet.getRange(sheetRow, COL.SEQ_NAME).setValue('No Sale Follow Up');
    sheet.getRange(sheetRow, COL.SEQ_START).setValue(today.toISOString().split('T')[0]);
    sheet.getRange(sheetRow, COL.NEXT_EMAIL).setValue(nextDate.toISOString().split('T')[0]);
    sheet.getRange(sheetRow, COL.EMAIL_STEP).setValue(1);
  }

  return {success: true};
}

// ─── SAVE NOTES ───────────────────────────────────────────────
function saveNotes(data) {
  const sheet = getSheet();
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) return {error: 'No leads found'};

  const ids = sheet.getRange(2, COL.ID, lastRow - 1, 1).getValues();
  const rowIdx = ids.findIndex(r => r[0] === data.id);
  if (rowIdx === -1) return {error: 'Lead not found'};

  sheet.getRange(rowIdx + 2, COL.NOTES).setValue(data.notes);
  return {success: true};
}

// ─── EMAIL SCHEDULER (run daily via Time Trigger) ─────────────
// Set up: Triggers → Add Trigger → runEmailScheduler → Time-driven → Day timer → 9am
function runEmailScheduler() {
  const sheet = getSheet();
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) return;

  const today = new Date().toISOString().split('T')[0];
  const data = sheet.getRange(2, 1, lastRow - 1, 13).getValues();

  const N8N_SEND_EMAIL = 'https://n8n.americanlifeteam.com/webhook/bmg-send-email';

  // Sequence definitions
  const NO_SALE_SEQUENCE = [
    {step:1, subject:'Quick follow-up — The Black Mold Guy', dayOffset:5},
    {step:2, subject:'The truth about bleach and mold', dayOffset:5},
    {step:3, subject:'5 questions to ask any mold company', dayOffset:5},
    {step:4, subject:'What waiting is actually costing you', dayOffset:6},
    {step:5, subject:'From our owner, Vincent', dayOffset:6},
    {step:6, subject:'Still here if you need us', dayOffset:9}
  ];

  const REACTIVATION_SEQUENCE = [
    {step:1, subject:'I owe you an apology — The Black Mold Guy', dayOffset:0},
    {step:2, subject:"It might not even be what you think", dayOffset:3},
    {step:3, subject:"$18k avoided — here's how", dayOffset:4},
    {step:4, subject:'Last thing (I promise)', dayOffset:7}
  ];

  data.forEach((row, i) => {
    const id        = row[COL.ID - 1];
    const email     = row[COL.EMAIL - 1];
    const name      = row[COL.NAME - 1];
    const status    = row[COL.STATUS - 1];
    const seqName   = row[COL.SEQ_NAME - 1];
    const nextEmail = row[COL.NEXT_EMAIL - 1];
    const emailStep = parseInt(row[COL.EMAIL_STEP - 1]) || 0;

    if (!email || !nextEmail) return;

    // Format date for comparison
    let nextDateStr = nextEmail;
    if (nextEmail instanceof Date) {
      nextDateStr = nextEmail.toISOString().split('T')[0];
    }

    if (nextDateStr !== today) return;

    let sequence, emailBody;

    if (seqName === 'No Sale Follow Up') {
      sequence = NO_SALE_SEQUENCE;
      const currentStep = sequence.find(s => s.step === emailStep);
      if (!currentStep) return;
      emailBody = getNoSaleEmailBody(name, emailStep);

      // Send email via n8n
      const payload = {
        to_email: email,
        subject: currentStep.subject,
        html: emailBody
      };
      sendViaWebhook(N8N_SEND_EMAIL, payload);

      // Calculate next step
      const sheetRow = i + 2;
      const nextStep = emailStep + 1;
      if (nextStep <= 6) {
        const nextSeq = sequence.find(s => s.step === nextStep);
        if (nextSeq) {
          const nd = new Date();
          nd.setDate(nd.getDate() + nextSeq.dayOffset);
          sheet.getRange(sheetRow, COL.NEXT_EMAIL).setValue(nd.toISOString().split('T')[0]);
          sheet.getRange(sheetRow, COL.EMAIL_STEP).setValue(nextStep);
        }
      } else {
        // Sequence complete
        sheet.getRange(sheetRow, COL.NEXT_EMAIL).setValue('');
        sheet.getRange(sheetRow, COL.EMAIL_STEP).setValue(0);
      }
    }
  });
}

function sendViaWebhook(url, payload) {
  try {
    UrlFetchApp.fetch(url, {
      method: 'POST',
      contentType: 'application/json',
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    });
  } catch(e) {
    Logger.log('Email send failed: ' + e.toString());
  }
}

function getNoSaleEmailBody(name, step) {
  const firstName = name ? name.split(' ')[0] : 'there';
  const from = 'The Black Mold Guy Team';

  const bodies = {
    1: `<p>Hi ${firstName},</p>
<p>Just wanted to check in — I know things get busy and sometimes timing just isn't right.</p>
<p>If you're still thinking about the mold situation at home, we're here. No pressure.</p>
<p>If something has changed and you need us sooner, just reply or call: <strong>305-849-0242</strong>.</p>
<br><p>${from}</p>`,

    2: `<p>Hi ${firstName},</p>
<p>Quick thing I tell everyone who's tempted to grab bleach: bleach is mostly water.</p>
<p>On porous surfaces like drywall, wood, or grout — the water soaks in, the bleach evaporates before it penetrates. The mold root system survives, and it grows back.</p>
<p>The only thing that actually works is removing the material or treating it with EPA-registered antimicrobials that penetrate the substrate.</p>
<p>If you've been treating it yourself with no luck — that's exactly why. It's not your fault.</p>
<p>Whenever you're ready: <strong>305-849-0242</strong></p>
<br><p>${from}</p>`,

    3: `<p>Hi ${firstName},</p>
<p>Before hiring any mold company, ask them these 5 questions:</p>
<ol>
<li>Do you do both inspections AND remediation? (Red flag if yes — conflict of interest)</li>
<li>Do your samples go to a third-party certified lab?</li>
<li>Will you give me a written report regardless of what you find?</li>
<li>Is your inspector MICRO certified or IAC2 certified?</li>
<li>Will you identify the moisture source — not just the mold?</li>
</ol>
<p>If they can't answer yes to all five, keep looking.</p>
<p>We can answer yes to all five. That's why we exist. <strong>305-849-0242</strong></p>
<br><p>${from}</p>`,

    4: `<p>Hi ${firstName},</p>
<p>I worked with a family last year who waited 8 months after calling us.</p>
<p>What would have been a $1,200 remediation in month one became a $14,000 job because the mold spread into the HVAC system and two adjacent rooms.</p>
<p>I'm not telling you this to scare you — I just want you to have the full picture. Mold doesn't wait.</p>
<p>If timing or budget is the issue, let's talk — we can work something out. <strong>305-849-0242</strong></p>
<br><p>${from}</p>`,

    5: `<p>Hi ${firstName},</p>
<p>My name is Vincent — I'm the owner of The Black Mold Guy.</p>
<p>I started this company because my sister's family spent two years dealing with mystery health symptoms that turned out to be mold. Three doctors missed it. The first inspector they hired recommended $22k in remediation — on the same visit as the inspection, without lab results.</p>
<p>That shouldn't happen. And it's why we built our process the way we did.</p>
<p>If there's anything I can answer personally, reach out directly: <strong>305-849-0242</strong> or reply to this email.</p>
<br><p>— Vincent, The Black Mold Guy</p>`,

    6: `<p>Hi ${firstName},</p>
<p>This is the last email in this series — I promise.</p>
<p>If the timing just isn't right, no hard feelings. But if something changes — new symptoms, a new home, a landlord situation — we're here.</p>
<p>Our number: <strong>305-849-0242</strong><br>Our site: theblackmoldguy.com</p>
<p>Take care of yourself and your family.</p>
<br><p>${from}</p>`
  };

  const body = bodies[step] || bodies[1];
  return `<div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px">
    <div style="background:#1a3a2a;padding:16px 24px;border-radius:10px 10px 0 0">
      <span style="color:white;font-weight:700;font-size:16px">The Black Mold Guy</span>
      <span style="color:rgba(255,255,255,0.5);font-size:12px;display:block">Mold Inspection & Remediation</span>
    </div>
    <div style="background:white;padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 10px 10px;line-height:1.7;color:#374151;font-size:15px">
      ${body}
      <hr style="border:none;border-top:1px solid #f0f0f0;margin:20px 0">
      <p style="font-size:12px;color:#9ca3af">305-849-0242 · theblackmoldguy.com · Atlanta &amp; Miami</p>
    </div>
  </div>`;
}
