let path = require('path');
let Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
    host: 'localhost',
    dialect: 'sqlite',
    storage: path.join(__dirname,'../database/user.sqlite')
});//在你需要的地方，创建好这个database文件夹

sequelize.authenticate().then(function(err) {
  console.log('Connection has been established successfully.');
}).catch(function (err) {
  console.log('Unable to connect to the database:', err);
});

var user = sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
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

module.exports.user = user;