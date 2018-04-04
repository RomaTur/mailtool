module.exports = (req) => {
  const apiKey = 'key-cdfc007f9a072610e6e2ea7a588e5c53';
  const domain = 'sandbox49b69e429e424a5180f0ce84dcadde46.mailgun.org';
  const mailgun = require('mailgun-js')({apiKey: apiKey, domain: domain});
  var data = {
    from: 'ГК "ЛАД" <turusovry@lad24.ru>',
    to: req.body.to,
    subject: req.body.subject,
    text: 'Testing some Mailgun awesomness!',
    html: req.body.html
  };
  
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
}