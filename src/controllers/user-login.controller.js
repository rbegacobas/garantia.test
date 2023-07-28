import User from '#Models/user.model.js';
import { compare } from 'bcrypt';
import sendEmailCVS from './mailer.js';
//import { tokenSign } from '../helpers/generateToken.js';
import speakeasy from 'speakeasy';

/*
// Let's say the user says that the token they have is 132890
var userToken = '132890';
 
// Let's say we stored the user's temporary secret in a user object like above:
// (This is specific to your implementation)
var base32secret = user.two_factor_temp_secret;
// Use verify() to check the token against the secret
var verified = speakeasy.totp.verify({ secret: base32secret,
                                       encoding: 'base32',
                                       token: userToken });

                                       // Verify a given token
var tokenValidates = speakeasy.totp.verify({
  secret: secret.base32,
  encoding: 'base32',
  token: '123456',
  window: 6
});
*/
// console.log('Enviado email test', sendEmailCVS('rbegacobas@gmail.com'))

const userLoginController = async (req, res) => {
    const { email, password } = req.body;

    const existingUserByEmail = await User.findOne({
        where: {
            email,
        },
    });

    if (!existingUserByEmail)
        return res.status(401).send({ errors: ['Credenciales incorrectas'] });

    const checkpassword = await compare(password, existingUserByEmail.password);
    if (!checkpassword)
        return res.status(401).send({ errors: ['Credenciales incorrectas'] });

    // const jwt = await tokenSign(existingUserByEmail);
    const secret = speakeasy.generateSecret();

    const codigoOTP = speakeasy.totp({
        secret: secret.base32,
        encoding: 'base32',
    });
    const id = existingUserByEmail._id;
    await User.update(
        { secret: secret.base32 },
        {
            where: {
                _id: id,
            },
        }
    );
 
    console.log('secrect: ', secret);
    console.log('codigo ', codigoOTP);

    sendEmailCVS(email, codigoOTP);

    return res.status(200).send({ mensaje: 'Codigo enviado correctamente' });
};

export default userLoginController;
