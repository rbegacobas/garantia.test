import { Sequelize } from 'sequelize';

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.DB, process.env.USERDB,process.env.PASSWORDDB, {
  host: process.env.HOST,
  dialect:  'mysql'
});

async function conectionDB(){
    try {
        await sequelize.sync();
        console.log('Conectado a la base de datos')

    } catch (error) {
        console.log('Error de Conexion')
    }
}

conectionDB();

export default conectionDB;
