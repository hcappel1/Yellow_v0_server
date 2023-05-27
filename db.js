const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "17Dabeast-11",
    host: "localhost",
    port: 5432,
    database: "yellow_v0"
});

module.exports = pool;