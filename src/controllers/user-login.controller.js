import User from '#Models/user.model.js';
import {compare} from 'bcrypt';
import {SignJWT} from 'jose';

const userLoginController = async (req, res) => {
    const { email, password } = req.body;

        const existingUserByEmail = await User.findOne({
        where: {
            email: email,
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

return res.send({jwt});
    
};
export default userLoginController;
