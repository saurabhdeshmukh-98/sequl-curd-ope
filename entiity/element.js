const Sequelize = require("sequelize");
const sequelize = require("../config/dataBase");

const element =  sequelize.define("Element", {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userName: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
},{
     freezeTableName:true
});


module.exports =element
