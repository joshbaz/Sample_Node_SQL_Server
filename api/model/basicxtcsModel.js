const Sequelize = require('sequelize')
const sequelizeInstance = require('../../utils/database')
// models for foreign keys
const listingModel = require('./listingModel')
const BasicXtcs = sequelizeInstance.define('basicxtc', {
    idCustomInput: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    feature: {
        type: Sequelize.STRING,
    },
    available: {
        type: Sequelize.BOOLEAN,
        default: false,
    },
})

//foreign Keys
// 1. listing
listingModel
    .hasOne(BasicXtcs, {
        foreignKey: 'idListing',
    })
 
module.exports = BasicXtcs
