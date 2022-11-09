const { Sequelize } = require ('sequelize');

const sequelize = new Sequelize('task4','root','root',{
    host:'localhost',
    port: 3306,
    dialect:'mysql',

    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:1000
    }
});
module.exports=sequelize;