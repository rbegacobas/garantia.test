import '#Config/env.js';
import httpServer from '#Config/http.js';
import conectionDB from '#Config/db.js';

const boostrap = async () => {
    await conectionDB();
    
    httpServer.listen(process.env.PORT, () => {
        console.log(`Servidor escuchando en el ${process.env.PORT}`);
    });
};
boostrap();
