import { Type } from '@sinclair/typebox';


export const idDTOSchema =Type.String({
    format: 'uuid',
    errorMessage: {
        type: 'El tipo de id no es valido',
        format: 'El id no es de este formato',
    },
});
export const nameDTOSchema =Type.String({
    minLength: 2,
    maxLength: 20,
    errorMessage: {
        minLength: 'El tipo de id no es valido',
        maxLength: 'El id no es de este formato',
    },
});
export const surnameDTOSchema =Type.String({
    minLength: 4,
    maxLength: 50,
    errorMessage: {
        minLength: 'El tipo de id no es valido',
        maxLength: 'El id no es de este formato',
    },
});
export const emailDTOSchema =Type.String({
    format: 'email',
    errorMessage: {
        type: 'El tipo de email no es valido',
        format: 'El email no es de este formato',
    },
});
export const passwordDTOSchema =Type.String({
    format: 'password',
    minLength: 10,
    maxLength: 25,
    errorMessage: {
        type: 'La contrasena no es valido',
        format: 'Esta contrasena no es segura',
    },
});


export const dealerIdDTOSchema =Type.String({
    minLength: 4,
    maxLength: 50,
    errorMessage: {
        minLength: 'El tipo de id no es valido',
        maxLength: 'El id no es de este formato',
    },
});