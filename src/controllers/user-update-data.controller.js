import User from '#Models/user.model.js';

const userUpdateDataController = async (req, res) => {
    const { id } = req;
    const { name, surname } = req.body;

    const existingUserById = await User.findByPk(id);

    if (!existingUserById) return res.status(401).send({errors:['Usuario no autorizado']});

    // Change everyone without a last name to "Doe"
    await User.update(
        { firstName: name, lastName: surname },
        {
            where: {
                _id: id,
            },
        }
    );
    
    return res.send('Usuario actualizado Correctamente!!!!');
};
export default userUpdateDataController;
