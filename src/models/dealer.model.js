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
class Dealer extends Model {}

Dealer.init(
    {
        // Model attributes are defined here
        _id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        nameDealer: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 20],
            },
        },
        
        emailAdmin: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        
        
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Dealer', // We need to choose the model name
    }
);

// the defined model is the class itself

Dealer.sync({ force: true });
export default Dealer;
