import User from '#Models/user.model.js';


const userProfileController = async (req, res) => {
    const { id } = req;

    

    const existingUserById = await User.findByPk(id);


    if (!existingUserById) return res.status(401).send('Usuario no autorizado');

    const { _id, firstName, lastName, email } = existingUserById;
    return res.send({ _id, firstName, lastName, email });
};
export default userProfileController;
