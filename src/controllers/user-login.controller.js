import User from '#Models/user.model.js';
import {compare} from 'bcrypt';
import sendEmailCVS from './mailer.js'
import {tokenSign} from '../helpers/generateToken.js'  


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
   
const checkpassword = await compare(password, existingUserByEmail.password)
   if(!checkpassword) return res.status(401).send({errors:['Credenciales incorrectas']})
   
   
    const jwt = await tokenSign(existingUserByEmail);
    

// sendEmailCVS.sendEmailCVS(email);

return res.send({jwt});
    
};



export default userLoginController;
