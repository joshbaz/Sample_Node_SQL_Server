const Sequelize = require('sequelize')
const dbConfig = require('./dbConfig')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    logging: false,
    pool: {
        max: 20,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
})

sequelize
    .authenticate()
    .then(() => {
        console.log('authenticated.')
    })
    .catch((error) => {
        console.log('failed Authentication')
    })

module.exports = sequelize
