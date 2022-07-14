process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const pg = require("pg")
var client = new pg.Client({
    host: "ec2-54-159-22-90.compute-1.amazonaws.com",
    port: 5432,
    database: "d7feirsbd06v8s",
    user: "ispudgshfclfra",
    password: "d4c54cf5d3ea8a6d366e202bd94375f78e39be81030e278c12ef9ebecc4e0396",
    ssl: true,
    dialectOption: {
        "ssl": {"require": true}
    }
})

module.exports = client