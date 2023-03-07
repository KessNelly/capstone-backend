const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
        host: "sql10.freesqldatabase.com",
        user: "sql10601206",
        password: "sWRjRktIFp",
        database: "sql10601206"

    })

module.exports = { connection }