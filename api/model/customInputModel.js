const Sequelize = require('sequelize')
const sequelizeInstance = require('../../utils/database')
const listingModel = require('./listingModel')

const CustomInput = sequelizeInstance.define('customInput', {
    idCustomInput: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    active: {
        type: Sequelize.BOOLEAN,
        default: false,
    },
})

//foreign Keys
// 1. listing
listingModel.hasOne(CustomInput, {
    foreignKey: 'idListing',
})
module.exports = CustomInput
