const Email = require('email-templates');
const nodemailer = require("nodemailer");

exports.sendForgotEmail = (name, username, uuid)=>{
    const email = new Email({
      views: {
            options: {
              extension: 'ejs' // <---- HERE
            }
          },
      preview:false,
      message: {
        from: 'abhi.technext@gmail.com'
      },
      // uncomment below to send emails in development/test env:
      send: true,
      transport: {
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: 'abhi.technext@gmail.com', // generated ethereal user
              pass: '9893357572' // generated ethereal password
            }
        }
    });
    
    email.send({
        template: 'forgot',
        message: {
          to: username
        },
        locals: {
          name: name,
          url:'http://localhost:3000/admins/reset-password?rest='+uuid
        }
      })
      .then(console.log)
      .catch(console.error);
      return true;
}