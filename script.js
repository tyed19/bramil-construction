document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var data = new FormData(e.target);
  var lines = [
    'Hi BRAMIL, I would like a free quote.',
    '',
    'Name: ' + (data.get('name') || ''),
    'Phone: ' + (data.get('phone') || ''),
    'Job: ' + (data.get('job') || ''),
    'Details: ' + (data.get('details') || '')
  ];
  var body = encodeURIComponent(lines.join('\n'));
  // Opens the visitor's text app addressed to BRAMIL. Works on mobile,
  // which is how most local customers will find this site.
  window.location.href = 'sms:+15308443139?&body=' + body;
});
