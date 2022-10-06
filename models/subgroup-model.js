const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('subgrupo', {

        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        tipoproduto : {
            type : Sequelize.STRING(200),
            allowNull : false
        }
    })
}