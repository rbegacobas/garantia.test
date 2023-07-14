import User from '#Models/user.model.js';
import {compare} from 'bcrypt';

const userUpdateEmailController = async (req, res) => {
    const { id } = req;
    const { email , password} = req.body;

    const existingUserById = await User.findByPk(id);

    if (!existingUserById) return res.status(401).send({errors:['Usuario no autorizado']});
    const checkpassword = await compare(password, existingUserById.password);
    if (!checkpassword) return res.status(401).send({errors:['Credenciales Incorrectas']});

    // Change everyone without a last name to "Doe"
    await User.update(
        { email: email },
        {
            where: {
                _id: id,
            },
        }
    );
    
    return res.send('Email actualizado Correctamente!!!!');
};
export default userUpdateEmailController;
