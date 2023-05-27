//Create instance of the express server
const express = require("express");
//Make api requests, call server
const app = express();
const cors = require('cors');
const pool = require('./db');

//Middleware
app.use(cors());
app.use(express.json());

//Create a user
app.post("/users", async(req,res) => {
    try {
        const { user } = req.body;
        const newUser = await pool.query(
            "INSERT INTO users (user) VALUES($1) RETURNING *", [user]
        );
        console.log(newUser);
        res.json(newUser);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("App has started on port 5000");
});
