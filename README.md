

<!-- BUILT WITH -->
Crear un usuario, por el momento no esta protegido
metodo post     http://localhost:3000/user/register

Body/JsonConten
{"name":"Ramon","surname":"Bega Cobas","email":"Correoreal@gmail.com","password":"Contra$ena2023","dealerId":"1231233123123123"}


Hacer Login en 
metodo post http://localhost:3000/user/login
Body/JsonConten {"email":"Correoreal@gmail.com","password":"Contra$ena2023"} 

EL login genera un codigo de verificacion que es enviado al correo donde intenta autenticarse, tambien por consola se muestra, dura 6 minutos

Para comprobar el codigo
metodo post http://localhost:3000/user/verify
{"email":"Correoreal@gmail.com","password":"Contra$ena2023","token":"350603"} en token el que se recibe

Esta accion genera el token que se utilizara para las rutas con acceso autenticado

El profile del usuario autenticado
Metodo Get http://localhost:3000/user/profile
En auth/Bearer Token El token generado en la verificacion del doble factor


<!-- USAGE -->

## Usage


```


