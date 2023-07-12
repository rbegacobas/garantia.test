import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import {
    
    emailDTOSchema,
    passwordDTOSchema,
} from '#Lib/dto-type.js';

const loginDTOSchema = Type.Object({
    email: emailDTOSchema,
    password: passwordDTOSchema,
},{
    additionalProperties: false,
    errorMessage:{
     additionalProperties: "Formato enviado no valido"
    }
 
 });
const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier');
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);

addFormats(ajv, ['email']);
addErrors(ajv);

const validateSchema = ajv.compile(loginDTOSchema);

const userLoginDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);
    console.log(isDTOValid);

    if (!isDTOValid)
        return res
            .status(400)
            .send({
                errors: validateSchema.errors.map((error) => error.message),
            });
    next();
};

export default userLoginDTO;
