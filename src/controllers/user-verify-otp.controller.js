import  speakeasy from 'speakeasy' ;
import User from '#Models/user.model.js';
import {verifyToken, tokenSign} from '../helpers/generateToken.js'
import {compare} from 'bcrypt';


var tokenValidates = speakeasy.totp.verify({
    secret: secret.base32,
    encoding: 'base32',
    token: '123456',
    window: 6,
});


const userVerifyOtpController = async (req, res) => {

    

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



export default userVerifyOtpController;