module.exports = (req) => {

  let textPlain = `К сожалению, сервис почты не распознал состав письма.
  Просим вас позвонить нашему менеджеру по телефону 88007758525 доб. ${req.body.worktel} для уточнения информации.
  
  Группа компаний «ЛАД»
  ---------------------------------------------------------------
   lad-gk.ru 
   
   ${req.body.html}
   `

  const sendmail = require('sendmail')();
  sendmail({
      from: `ГК "ЛАД" <${req.body.from}>`,
      to: req.body.to,
      subject: req.body.subject,
      text: textPlain,
      html: req.body.html,
    }, function(err, reply) {
      console.log(`\n${err && err.stack}\n`);
      console.dir(`\n${reply}\n`);
  });
}