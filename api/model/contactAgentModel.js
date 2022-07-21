const Sequelize = require('sequelize')
const sequelizeInstance = require('../../utils/database')
const listingModel = require('./listingModel')
const ContactAgent = sequelizeInstance.define('contactAgent', {
    idContactAgent: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
})

//foreign Keys
// 1. agent

// 2. listing
listingModel.hasOne(ContactAgent, {
    foreignKey: 'idListing',
})
module.exports = ContactAgent
