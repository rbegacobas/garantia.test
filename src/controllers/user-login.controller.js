import User from '#Models/user.model.js';
import {compare} from 'bcrypt';
import {SignJWT} from 'jose';
import sendEmailCVS from './mailer.js'
     


import  speakeasy from 'speakeasy' ;

const secret = speakeasy.generateSecret(); 

const codigoOTP =  speakeasy.totp({
    secret: secret.base32,
    encoding: 'base32'
  });





console.log('secrect ',secret);
console.log('codigo ',codigoOTP);
// console.log('Enviado email test', sendEmailCVS('rbegacobas@gmail.com'))

const userLoginController = async (req, res) => {
    const { email, password } = req.body;

        const existingUserByEmail = await User.findOne({
        where: {
            email,
        },
    });
   
    if (!existingUserByEmail)
        return res.status(401).send({errors:['Credenciales incorrectas']});
   // const hashedPassword = await bcrypt.hash(password, 12);
const checkpassword = await compare(password, existingUserByEmail.password)
   if(!checkpassword) return res.status(401).send({errors:['Credenciales incorrectas']}) 
    const jwtConstructor = new SignJWT({id:existingUserByEmail._id})

    const encoder = new TextEncoder();
    const jwt = await jwtConstructor.setProtectedHeader({
    alg: 'HS256',
    typ: 'JWT'
}).setIssuedAt().setExpirationTime('7d').sign(encoder.encode(process.env.JWT_PRIVATE_KEY));

// sendEmailCVS.sendEmailCVS(email);

return res.send({jwt});
    
};



export default userLoginController;
