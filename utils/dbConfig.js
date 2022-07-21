require('dotenv').config()

/** 
 * these are used to authenticate and give access to the Database
 *  Note : Credentials for your SQL db user are required
 *  create a .env file or replace the process.env.SQL_** with the required information
 * 
 *  An Example
 * 
 *  HOST: 'localhost',
 *  USER: 'root',
 *  PASSWORD: '',
 *  DB: 'test_trial',
 *  dialect: 'mysql',
 * 
 */
module.exports = {
    HOST: `${process.env.SQL_HOST}`, // host like localhost
    USER: `${process.env.SQL_USER}`, // user credential like josh or root 
    PASSWORD: `${process.env.SQL_PASSWORD}`,// your password if any
    DB: `${process.env.SQL_DB}`,// databaseName like testTrial
    dialect: `${process.env.SQL_DIALECT}`,//mysql

    pool: {
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
}
