import jwt from 'jsonwebtoken' // TODO : 😎

const tokenSign = async (user) => { // TODO: Genera Token
    return jwt.sign(
        {
            _id: user._id // TODO: <---
            
        }, // TODO: Payload ! Carga útil
        process.env.JWT_SECRET, // TODO ENV 
        {
            expiresIn: "2h", // TODO tiempo de vida
        }
    );
}
const tokenSign2F = async (user) => { // TODO: Genera Token
    return jwt.sign(
        {
            _id: user._id, // TODO: <---
            role: user.role
        }, // TODO: Payload ! Carga útil
        process.env.JWT_SECRET, // TODO ENV 
        {
            expiresIn: "2h", // TODO tiempo de vida
        }
    );
}

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (e) {
        return null
    }
}

const decodeSign = (token) => { // TODO: Verificar que el token sea valido y correcto
    return jwt.decode(token, null)
}



export  { tokenSign, decodeSign, verifyToken, tokenSign2F }