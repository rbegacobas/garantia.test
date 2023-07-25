import { createTransport } from 'nodemailer';

const transporter = createTransport({
    service: 'hotmail',
    // port: 587,
    auth: {
        user: 'vcsmax@outlook.es',
        pass: 'P@$$w0rd2023',
    },
    /* tls: {
        rejectUnauthorized: false,
    }, */
});
 
async function sendEmailCVS(toEmail) {
    // send mail with defined transport object
    const sEmail = await transporter.sendMail({
        from: `"No reply" ${process.env.MAILER_USER}`, // sender address 'vcsmax@outlook.es',// 
        to: toEmail, // list of receivers
        subject: `'!!!!!Envio de codigo actualizado ${Date.now} ✔'`, // Subject line
        text: 'Hello world? Cuerpo del email', // plain text body
        html: '<b>Hello world? con html</b>', // html body
    });

    console.log(sEmail, 'Entro');
}

export default sendEmailCVS;

/* MAILER_HOST='smtp.gmail.com'
MAILER_PORT= 465
MAILER_SECURE = true
MAILER_USER='rbegacobas@gmail.com'
MAILER_PASSWORD='Cr1$t0123' */
