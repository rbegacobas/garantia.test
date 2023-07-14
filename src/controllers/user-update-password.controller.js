import User from '#Models/user.model.js';
import {compare,hash} from 'bcrypt';


const userUpdatePasswordController = async (req, res) => {
    const { id } = req;
    const { newPassword , oldPassword} = req.body;

    const existingUserById = await User.findByPk(id);

    if (!existingUserById) return res.status(401).send({errors:['Usuario no autorizado']});
    const checkpassword = await compare(oldPassword, existingUserById.password);
    if (!checkpassword) return res.status(401).send({errors:['Credenciales Incorrectas']});

    const hashedPassword = await hash(newPassword, 12);


    // Change everyone without a last name to "Doe"
    await User.update(
        { password: hashedPassword },
        {
            where: {
                _id: id,
            },
        }
    );
    
    return res.send('Contrasena actualizada Correctamente!!!!');
};
export default userUpdatePasswordController;
