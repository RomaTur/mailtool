module.exports = (req) => {
  const sendmail = require('sendmail')();
  sendmail({
      from: 'ГК "ЛАД" <turusovry@lad24.ru>',
      to: req.body.to,
      subject: req.body.subject,
      html: req.body.html,
    }, function(err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
  });
}