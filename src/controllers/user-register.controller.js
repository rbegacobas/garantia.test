import User from '#Models/user.model.js';
import bcrypt from 'bcrypt';

const userRegisterController = async (req, res) => {
    const { name, surname, email, password, dealerId } = req.body;


    const existingUserByEmail = await User.findOne({
        where: {
            email: email,
        },
    });
   
    if (existingUserByEmail)
        return res.status(409).send({errors:['ya existe usuario con ese email']});
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    
    
        const newUser = await User.create({
            
            firstName: name,
            lastName: surname,
            email: email,
            password: hashedPassword,
            dealerId
        });
    
        
   
    

    res.status(201).send('usuario registrado con suceso!!!');
};
export default userRegisterController;
