const Sequelize = require('sequelize')

const sequelizeInstance = require('../../utils/database')

const Image = sequelizeInstance.define('image', {
    idImage: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
    },
    url: {
        type: Sequelize.STRING,
    },
    path: {
        type: Sequelize.STRING,
    },
})

module.exports = Image
