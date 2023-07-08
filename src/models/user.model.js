import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}

User.init({
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        len: [2,20],
        isAlpha: true,
        notNull: true
    }
  },
  lastName: {
    type: DataTypes.STRING,
    // allowNull defaults to true
    validate: {
        len: [4,50],
        isAlpha: true
    }
  },
  email: {
    type: DataTypes.STRING,
    validate: {
        isEmail: true,
        notNull: true 
    }
  },
  password: {
    type: DataTypes.STRING,
    validate: {
            notNull: true 
    }
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true