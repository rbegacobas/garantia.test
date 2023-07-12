import { Sequelize, DataTypes, Model } from 'sequelize';
//const sequelize = new Sequelize('sqlite::memory:');
const sequelize = new Sequelize(
    process.env.DB,
    process.env.USERDB,
    process.env.PASSWORDDB,
    {
        host: process.env.HOST,
        dialect: 'mysql',
    }
);
class User extends Model {}

User.init(
    {
        // Model attributes are defined here
        _id: {
            primaryKey: true,
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 20],
                isAlpha: true,
                notNull: true,
            },
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull:false,
            // allowNull defaults to true
            validate: {
                len: [4, 50],
                isAlpha: true,
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull:false,
            unique: true,
            validate: {
                isEmail: true
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                notNull: true,
            },
        },
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'User', // We need to choose the model name
    }
);

// the defined model is the class itself

User.sync();
export default User;
