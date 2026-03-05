// Multi-step pre-qualification form
(function() {
  var steps = [
    {
      key: 'state',
      label: 'What state do you live in?',
      type: 'select',
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
      label: 'When do you plan to start withdrawing from your retirement savings?',
      type: 'buttons',
      options: ['Already withdrawing', 'Within 1-3 years', 'Within 3-5 years', '5-10 years', '10+ years']
    },
    {
      key: 'current_investments',
      label: 'Where are your retirement savings currently held?',
      type: 'buttons',
      options: ['401(k) or 403(b)', 'IRA or Roth IRA', 'Brokerage account', 'CDs or savings', 'Multiple accounts', 'Other']
    },
    {
      key: 'savings_range',
      label: 'Approximately how much do you have in retirement savings?',
      type: 'buttons',
      options: ['Under $100K', '$100K - $200K', '$200K - $350K', '$350K - $500K', '$500K - $750K', '$750K+']
    }
  ];

  var current = 0;
  var answers = {};
  var totalSteps = steps.length;
  var stepsEl = document.getElementById('form-steps');
  var progressEl = document.getElementById('form-progress');

  function buildProgress() {
    progressEl.innerHTML = '';
    for (var i = 0; i < totalSteps; i++) {
      var dot = document.createElement('div');
      dot.className = 'form-progress-dot' + (i <= current ? ' filled' : '');
      progressEl.appendChild(dot);
    }
  }

  function renderStep() {
    var s = steps[current];
    var html = '<div class="form-step active">';
    html += '<div class="form-step-counter">Question ' + (current + 1) + ' of ' + totalSteps + '</div>';
    html += '<div class="form-step-label">' + s.label + '</div>';

    if (s.type === 'select') {
      html += '<div class="form-select-wrap">';
      html += '<select id="form-select" onchange="window._formSelect(this.value)">';
      html += '<option value="">Select your state...</option>';
      for (var i = 0; i < s.options.length; i++) {
        html += '<option value="' + s.options[i] + '">' + s.options[i] + '</option>';
      }
      html += '</select></div>';
    } else {
      for (var j = 0; j < s.options.length; j++) {
        html += '<button type="button" class="form-option" onclick="window._formPick(\'' + s.options[j].replace(/'/g, "\\'") + '\')">' + s.options[j] + '</button>';
      }
    }

    html += '</div>';
    stepsEl.innerHTML = html;
    buildProgress();
  }

  function advance(value) {
    answers[steps[current].key] = value;
    current++;
    if (current < totalSteps) {
      renderStep();
    } else {
      showComplete();
    }
  }

  function showComplete() {
    buildProgress();
    stepsEl.innerHTML = '<div class="form-step active" style="text-align:center;padding:24px 0;">' +
      '<div style="font-size:2.5rem;margin-bottom:12px;">&#10003;</div>' +
      '<div class="form-step-label">You may qualify for the Retirement Growth Plan.</div>' +
      '<p style="color:#6b7280;font-size:0.9375rem;margin-bottom:24px;">A Licensed Growth Plan Advisor will review your answers and reach out with a personalized breakdown.</p>' +
      '<div style="display:none;" id="feathery-final"></div>' +
      '</div>';

    // Show Feathery for contact details collection
    var fc = document.getElementById('feathery-container');
    if (fc) {
      fc.style.display = 'block';
      fc.style.marginTop = '0';
    }

    // Try to pass data to Feathery if available
    if (window.Feathery && window.Feathery.setFieldValues) {
      try { window.Feathery.setFieldValues(answers); } catch(e) {}
    }
  }

  window._formPick = function(val) { advance(val); };
  window._formSelect = function(val) { if (val) advance(val); };

  // Init
  renderStep();
})();
