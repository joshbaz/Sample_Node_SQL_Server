const mysql = require('mysql2/promise')
const dbConfig = require('../../utils/dbConfig')
const sequelizeInstance = require('../../utils/database')

module.exports = async (req, res, next) => {
    const connection = await mysql.createConnection({
        host: dbConfig.HOST,
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
    })

    const dbquery = await connection.query(
        `CREATE DATABASE IF NOT EXISTS ${dbConfig.DB};`
    )

    console.log('query', dbquery[0].serverStatus)

    await sequelizeInstance.sync({ force: false })

    //console.log('sync')
    next()
}
