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
 
async function sendEmailCVS(toEmail,token) {
    // send mail with defined transport object
    const sEmail = await transporter.sendMail({
        from: `"No reply" ${process.env.MAILER_USER}`, // sender address 'vcsmax@outlook.es',// 
        to: toEmail, // list of receivers
        subject: `'!!!!!Envio de codigo actualizado ${Date.now} ✔'`, // Subject line
        text: token, // plain text body
        html:  `"No reply" ${token}`, // html body
    });

    console.log(sEmail, 'Entro');
}

export default sendEmailCVS;

