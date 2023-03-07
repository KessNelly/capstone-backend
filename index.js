const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors');

//importing all the routes
const { routeManager } = require('./routes/rts.js');
//const rmg = require("./routes/rout.js");
const homeroute = require("./routes/home.js")

//creating express server
const app = express()

//handling route request
app.use("/", homeroute)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//app.use("/", rmg.routManager)
app.use("/", routeManager)

app.listen((5000), () => {
    console.log("Server is running")
})