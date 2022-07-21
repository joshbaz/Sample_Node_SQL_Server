const Sequelize = require('sequelize')
const sequelizeInstance = require('../../utils/database')
const listingModel = require('./listingModel')
const prospectModel = require('./propectsModel')

const Messages = sequelizeInstance.define('message', {
    idMessage: {
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

// foreign Keys
// 1. prospect
prospectModel.hasOne(Messages, {
    foreignKey: 'idProspects',
})

// 2. property
listingModel.hasOne(Messages, {
    foreignKey: 'propertyId',
})
module.exports = Messages
