import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import { 
    
    passwordDTOSchema} from '#Lib/dto-type.js'


const UpdatePasswordDTOSchema = Type.Object({
    newPassword: passwordDTOSchema,
    oldPassword: passwordDTOSchema
});
const ajv = new Ajv({allErrors: true}).addKeyword('kind').addKeyword('modifier');
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);


addErrors(ajv);

const validateSchema = ajv.compile(UpdatePasswordDTOSchema);

const userUpdatePasswordDTO = (req, res,next)=> {
    const isDTOValid = validateSchema(req.body);
    console.log(isDTOValid);

    if(!isDTOValid) return res.status(400).send({errors : validateSchema.errors.map((error)=>error.message ) });
    next();

}


export default userUpdatePasswordDTO; 
