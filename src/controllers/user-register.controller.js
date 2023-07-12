import User from '#Models/user.model.js';
import bcrypt from 'bcrypt';

const userRegisterController = async (req, res) => {
    const { _id, name, surname, email, password } = req.body;

    const existingUserById = await User.findByPk(_id);
   
    if (existingUserById)
        return res.status(409).send('Ya existe usuario con ese id');

    const existingUserByEmail = await User.findOne({
        where: {
            email: email,
        },
    });
   
    if (existingUserByEmail)
        return res.status(409).send('ya existe usuario con ese email');
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const newUser = await User.create({
        _id: _id,
        firstName: name,
        lastName: surname,
        email: email,
        password: hashedPassword
    });
    

    res.status(201).send('usuario registrado con suceso!!!');
};
export default userRegisterController;
