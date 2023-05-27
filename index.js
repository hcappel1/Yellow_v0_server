//Create instance of the express server
const express = require("express");
//Make api requests, call server
const app = express();

const db = require("./models");

//Routers
const userRouter = require('./routes/Users');
app.use("/users", userRouter);

//Uses sequelize to generate tables in database automatically upon startup
db.sequelize.sync().then(() => {
    //let instance of express listen to port 3001 and then console log the message
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});
