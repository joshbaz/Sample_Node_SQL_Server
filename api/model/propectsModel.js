const Sequelize = require('sequelize')
const sequelizeInstance = require('../../utils/database')

const Prospects = sequelizeInstance.define('prospects', {
    idProspect: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fullname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phonenumber: {
        type: Sequelize.STRING,
    },
})


module.exports = Prospects
