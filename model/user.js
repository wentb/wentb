const path = require('path');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(undefined, undefined, undefined, {
    host: 'localhost',
    dialect: 'sqlite',
    storage: path.join(__dirname,'../database/user.sqlite')
});

sequelize.authenticate().then(function(err) {
  console.log('Connection has been established successfully.');
}).catch(function (err) {
  console.log('Unable to connect to the database:', err);
});

var User = sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        defaultValue: 1,
        primaryKey: true
    },
    loginid:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    createAt:{
        type:Sequelize.DATE,
        allowNull: false
    }
});

module.exports.User = User;