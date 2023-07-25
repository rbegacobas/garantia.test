import { verifyToken } from '../helpers/generateToken.js';

const userJWTDTO = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization)
        return res.status(401).send({ errors: ['Usuario no autenticado'] });

    const jwt = authorization.split(' ')[1];

    if (!jwt) return res.status(401).send('Usuario no autenticado');

    try {
        console.log('entro aqui');

        const verifyT = await verifyToken(jwt);

        req.id = verifyT._id;

        next();
    } catch (error) {
        return res.status(401).send({ errors: ['Usuario no autenticado!'] });
    }
};

export default userJWTDTO;
