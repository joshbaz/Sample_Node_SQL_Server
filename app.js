//imports
const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const dbConfig = require('./utils/dbConfig')
const sequelizeInstance = require('./utils/database')
require('dotenv').config()

//initialization of the express application
const app = express()

const corsOptions = {
    origin: 'http://localhost:3000',
}

// application of the middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/**  router */
const listingRoute = require('./api/routes/listingRouter')
app.use('/api/listing', listingRoute)

/** starter page */
app.get('/', (req, res, next) => {
    res.send('SQL - NODE SERVER')
})

/** error handling */
app.use((error, req, res, next) => {
    const status = error.statusCode || 500
    const message = error.message
    console.log(error.statusCode)
    res.status(status).json(message)
})

/** PORT AND RUN SERVER */
const PORT = process.env.PORT || 5000
//iif
;(async () => {
    try {
        const connection = await mysql.createConnection({
            host: dbConfig.HOST,
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
        })

        await connection.query(
            `CREATE DATABASE IF NOT EXISTS \`${dbConfig.DB}\`;`
        )

        console.log('created db')
        await sequelizeInstance.sync({ force: false })

        const server = app.listen(PORT)

        if (server) {
            console.log(`server running on port ${PORT}`)
        } else {
            console.log(`server failed to run on the port ${PORT}`)
        }
    } catch (error) {
        console.log('server failed... check db auth')
    }
})()
