import { Type } from '@sinclair/typebox';
import {Ajv} from 'ajv';
import {addFormats}

const RegisterDTOSchema = Type.Object({
    _id: Type.String({
        format: 'uuid',
        errorMessage: {
            type: 'El tipo de id no es valido',
            format: 'El id no es de este formato',
        },
    }),
    name: Type.String({
        minLength: 2,
        maxLength: 20,
        errorMessage: {
            minLength: 'El tipo de id no es valido',
            maxLength: 'El id no es de este formato',
        },
    }),
    surname: Type.String({
        minLength: 4,
        maxLength: 50,
        errorMessage: {
            minLength: 'El tipo de id no es valido',
            maxLength: 'El id no es de este formato',
        },
    }),
    email: Type.String({
        format: 'email',
        errorMessage: {
            type: 'El tipo de email no es valido',
            format: 'El email no es de este formato',
        },
    }),
    password: Type.String({
        format: 'password',
        minLength: 10,
        maxLength: 25,
        errorMessage: {
            type: 'El tipo de email no es valido',
            format: 'El email no es de este formato',
        },
    })
});
const ajv = new Ajv();
addFormats(ajv,['email', 'uuid']).addKeyword('kind').addKeyword('modifier');


ajv.addFormat("password", /^a-z\$_[a-zA-Z$_0-9]*$/);