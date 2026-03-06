// Multi-step pre-qualification form (standalone)
(function() {
  var steps = [
    {
      key: 'state',
      label: 'What state do you live in?',
      type: 'select',
      placeholder: 'Select your state...',
      options: ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
    },
    {
      key: 'age',
      label: 'How old are you?',
      type: 'buttons',
      options: ['Under 50', '50-54', '55-59', '60-64', '65-69', '70-74', '75+']
    },
    {
      key: 'growth_importance',
      label: 'How important is guaranteed growth to you?',
      type: 'buttons',
      options: ['Very important', 'Somewhat important', 'Not sure yet', 'Not a priority']
    },
    {
      key: 'planning_approach',
      label: 'Which best describes your retirement planning approach?',
      type: 'buttons',
      options: ['I want to protect what I have', 'I want steady growth without risk', 'I want reliable income in retirement', 'I\'m exploring all my options']
    },
    {
      key: 'withdrawal_timeline',
      label: 'When do you plan to start withdrawing from your savings?',
      type: 'buttons',
      options: ['Already withdrawing', 'Within 1-3 years', 'Within 3-5 years', '5-10 years', '10+ years']
    },
    {
      key: 'current_investments',
      label: 'Where are your savings currently held?',
      type: 'buttons',
      options: ['401(k) or 403(b)', 'IRA or Roth IRA', 'Brokerage account', 'CDs or savings', 'Multiple accounts', 'Other']
    },
    {
      key: 'savings_range',
      label: 'Approximately how much do you have saved?',
      type: 'buttons',
      options: ['Under $100K', '$100K - $200K', '$200K - $350K', '$350K - $500K', '$500K - $750K', '$750K+']
    }
  ];

  var current = 0;
  var answers = {};
  var totalSteps = steps.length + 1; // +1 for contact step
  var stepsEl = document.getElementById('form-steps');
  var progressEl = document.getElementById('form-progress');

  if (!stepsEl || !progressEl) return;

  function buildProgress() {
    progressEl.innerHTML = '';
    for (var i = 0; i < totalSteps; i++) {
      var dot = document.createElement('div');
      dot.className = 'form-progress-dot' + (i <= current ? ' filled' : '');
      progressEl.appendChild(dot);
    }
  }

  function esc(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }

  function renderStep() {
    var s = steps[current];
    var html = '<div class="form-step active">';
    html += '<div class="form-step-counter">Question ' + (current + 1) + ' of ' + steps.length + '</div>';
    html += '<div class="form-step-label">' + s.label + '</div>';

    if (s.type === 'select') {
      html += '<div class="form-select-wrap">';
      html += '<select id="form-select" onchange="window._formSelect(this.value)">';
      html += '<option value="">' + s.placeholder + '</option>';
      for (var i = 0; i < s.options.length; i++) {
        html += '<option value="' + s.options[i] + '">' + s.options[i] + '</option>';
      }
      html += '</select></div>';
    } else {
      for (var j = 0; j < s.options.length; j++) {
        html += '<button type="button" class="form-option" onclick="window._formPick(\'' + esc(s.options[j]) + '\')">' + s.options[j] + '</button>';
      }
    }

    html += '</div>';
    stepsEl.innerHTML = html;
    buildProgress();
  }

  function showContactForm() {
    current = steps.length;
    buildProgress();
    var html = '<div class="form-step active" style="text-align:left;">';
    html += '<div style="text-align:center;margin-bottom:20px;">';
    html += '<div style="width:48px;height:48px;background:#f0fdf4;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:1.5rem;color:#2d8a4e;margin-bottom:8px;">&#10003;</div>';
    html += '<div class="form-step-label" style="margin-bottom:4px;">Based on your answers, you may qualify.</div>';
    html += '<p style="color:#6b7280;font-size:0.875rem;margin:0;">Enter your details and a Licensed Growth Plan Advisor will reach out with a personalized breakdown.</p>';
    html += '</div>';
    html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;" class="cf-name-grid">';
    html += '<input type="text" id="cf-first" placeholder="First name" style="padding:12px 16px;border:2px solid #e5e7eb;border-radius:10px;font-size:0.9375rem;font-family:inherit;outline:none;" onfocus="this.style.borderColor=\'#c8963e\'" onblur="this.style.borderColor=\'#e5e7eb\'">';
    html += '<input type="text" id="cf-last" placeholder="Last name" style="padding:12px 16px;border:2px solid #e5e7eb;border-radius:10px;font-size:0.9375rem;font-family:inherit;outline:none;" onfocus="this.style.borderColor=\'#c8963e\'" onblur="this.style.borderColor=\'#e5e7eb\'">';
    html += '</div>';
    html += '<input type="email" id="cf-email" placeholder="Email address" style="width:100%;padding:12px 16px;border:2px solid #e5e7eb;border-radius:10px;font-size:0.9375rem;font-family:inherit;margin-top:12px;outline:none;box-sizing:border-box;" onfocus="this.style.borderColor=\'#c8963e\'" onblur="this.style.borderColor=\'#e5e7eb\'">';
    html += '<input type="tel" id="cf-phone" placeholder="Phone number" style="width:100%;padding:12px 16px;border:2px solid #e5e7eb;border-radius:10px;font-size:0.9375rem;font-family:inherit;margin-top:12px;outline:none;box-sizing:border-box;" onfocus="this.style.borderColor=\'#c8963e\'" onblur="this.style.borderColor=\'#e5e7eb\'">';
    html += '<button type="button" onclick="window._formSubmit()" style="width:100%;margin-top:16px;padding:16px;background:#c8963e;color:#fff;font-family:inherit;font-weight:700;font-size:1.0625rem;border:none;border-radius:10px;cursor:pointer;transition:background 0.2s;" onmouseover="this.style.background=\'#daa84e\'" onmouseout="this.style.background=\'#c8963e\'">See My Personalized Results</button>';
    html += '</div>';
    stepsEl.innerHTML = html;
  }

  function showThankYou() {
    progressEl.style.display = 'none';
    var html = '<div class="form-step active" style="text-align:center;padding:24px 0;">';
    html += '<div style="width:64px;height:64px;background:#f0fdf4;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:2rem;color:#2d8a4e;margin-bottom:16px;">&#10003;</div>';
    html += '<div class="form-step-label" style="font-size:1.25rem;">You\'re all set.</div>';
    html += '<p style="color:#6b7280;font-size:0.9375rem;margin-top:8px;">A Licensed Growth Plan Advisor will review your information and contact you within 1 business day with a personalized breakdown based on your situation.</p>';
    html += '</div>';
    stepsEl.innerHTML = html;
  }

  function advance(value) {
    answers[steps[current].key] = value;
    current++;
    if (current < steps.length) {
      renderStep();
    } else {
      showContactForm();
    }
  }

  window._formPick = function(val) { advance(val); };
  window._formSelect = function(val) { if (val) advance(val); };
  window._formSubmit = function() {
    var first = document.getElementById('cf-first').value.trim();
    var last = document.getElementById('cf-last').value.trim();
    var email = document.getElementById('cf-email').value.trim();
    var phone = document.getElementById('cf-phone').value.trim();

    if (!first || !email || !phone) {
      var missing = [];
      if (!first) missing.push('first name');
      if (!email) missing.push('email');
      if (!phone) missing.push('phone');
      alert('Please enter your ' + missing.join(', ') + '.');
      return;
    }

    answers.first_name = first;
    answers.last_name = last;
    answers.email = email;
    answers.phone = phone;

    // Log to console for now (connect to webhook/CRM later)
    console.log('RGP Lead:', JSON.stringify(answers, null, 2));

    showThankYou();
  };

  // Init
  renderStep();
})();
