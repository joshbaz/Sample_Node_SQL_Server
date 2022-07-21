const Sequelize = require('sequelize')
const sequelizeInstance = require('../../utils/database')

const listingModel = require('./listingModel')
const imageModel = require('./imageModel')

const PropertyImage = sequelizeInstance.define('propertyImage', {
    idPropertyImage: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
})

//foreign Keys
// 1. listing
listingModel.hasOne(PropertyImage, {
    foreignKey: 'idListing',
})
// 2. Image
imageModel.hasOne(PropertyImage, {
    foreignKey: 'idImage',
})

module.exports = PropertyImage
