import speakeasy from 'speakeasy';
import User from '#Models/user.model.js';
import { tokenSign } from '../helpers/generateToken.js';
import { compare } from 'bcrypt';

const userVerifyOtpController = async (req, res) => {
    const { email, password, token } = req.body;

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
    
        const secretPass = existingUserByEmail.secret;
        console.log(existingUserByEmail.secret,secretPass,email, password, token);

        var tokenValidates = speakeasy.totp.verify({
            secret: secretPass,
            encoding: 'base32',
            token: token,
            window: 6,
        });
        console.log(tokenValidates)
        if(!tokenValidates)
        return res.status(401).send({ errors: ['token incorrecto'] });

    const jwt = await tokenSign(existingUserByEmail);

    // sendEmailCVS.sendEmailCVS(email);

    return res.send({ jwt }).status(200);
};

export default userVerifyOtpController;
