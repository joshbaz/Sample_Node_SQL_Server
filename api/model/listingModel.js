const Sequelize = require('sequelize')

const sequelizeInstance = require('../../utils/database')

const Listings = sequelizeInstance.define('listing', {
    idListing: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    location: {
        type: Sequelize.STRING,
    },
    title: {
        type: Sequelize.STRING,
    },
    area: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.INTEGER,
    },
    featured: {
        type: Sequelize.BOOLEAN,
        default: false,
    },
    sold: {
        type: Sequelize.BOOLEAN,
        default: false,
    },
    published: {
        type: Sequelize.BOOLEAN,
        default: false,
    },
})

module.exports = Listings
