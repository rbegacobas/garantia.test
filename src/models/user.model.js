import { Sequelize, DataTypes, Model } from 'sequelize';

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
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 20],
            },
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            // allowNull defaults to true
            validate: {
                len: [4, 50],
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dealerId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM,
            values: ['superAdmin', 'admin', 'user'],
            defaultValue: 'user',
            allowNull: false
        },
        secret: {
            type: DataTypes.STRING,
            allowNull: true,
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
// User.sync({ force: true });
export default User;
