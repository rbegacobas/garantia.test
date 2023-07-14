import User from '#Models/user.model.js';
import {compare} from 'bcrypt';

const userUnregisterController = async (req, res) => {
    const { id } = req;
    const { password} = req.body;

    const existingUserById = await User.findByPk(id);

    if (!existingUserById) return res.status(401).send('Usuario no autorizado');
    const checkpassword = await compare(password, existingUserById.password);
    if (!checkpassword) return res.status(401).send('Credenciales Incorrectas');

    
    await User.destroy({
        where: {
            _id: id,
        }
      });
    return res.send('Usuario eliminado Correctamente!!!!');
};
export default userUnregisterController;
