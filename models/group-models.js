const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('grupo', {
        produto : {
            type : Sequelize.STRING(50),
            allowNull : false
        },
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        descrição : {
            type : Sequelize.STRING(200),
            allowNull : false
        }
    })
}