module.exports = (req) => {
let another = `доб. ${req.body.worktel}`;
  let textPlain = `К сожалению, сервис почты не распознал состав письма.
Просим вас позвонить нашему менеджеру по телефону 88007758525 ${another} для уточнения информации.
  
Группа компаний «ЛАД»
---------------------------------------------------------------
lad-gk.ru 
   `

let fs = require('fs')
   

 let selfSignedConfig = {
   host: 'Service-smtp-lad24-1',
   port: 25,
   secure: true,
   dkim: {
    domainName: 'lad24.ru',
    keySelector: '1525336092.lad24',
    privateKey: fs.readFileSync('/home/roman/projects/mailtool/server/dkim-private.pem', 'utf8')
  }
 };
 const nodemailer = require('nodemailer');

 let transporter = nodemailer.createTransport(selfSignedConfig);

  // verify connection configuration
  transporter.verify(function(error, success) {
    if (error) {
         console.log(error);
    } else {
         console.log('Server is ready to take our messages');
    }
  });

  // transporter.sendMail({
  //   from: `ГК "ЛАД" <${req.body.from}>`,
  //   to: req.body.to,
  //   subject: req.body.subject,
  //   text: textPlain,
  //   html: req.body.html,
  // }, function(err){
  //   if(err){
  //     console.log(`\n${err}\n`);    
  //   }
  // });
  // const sendmail = require('sendmail')({
  //   // smtpPort: 25,
  //   // smtpHost: 'Service-smtp-lad24-1',
  //   dkim: { // Default: False
  //     privateKey: fs.readFileSync('/home/roman/projects/mailtool/server/dkim-private.pem', 'utf8'),
  //     keySelector: '1525336092.lad24'
  //   },
  // });
  // sendmail({
  //     from: `ГК "ЛАД" <${req.body.from}>`,
  //     to: req.body.to,
  //     subject: req.body.subject,
  //     text: textPlain,
  //     html: req.body.html,
  //   }, function(err, reply) {
  //     // console.log(`\n${err && err.stack}\n`);
  //     // console.dir(`\n${reply}\n`);
  // });
}