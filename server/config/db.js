const mssql = require("mssql");

const db = mssql.createPool({
  host: "211.233.58.176",
  port: "33000",
  user: "ssk",
  password: "1234",
  databse: "EM.MES",
});

module.exports = db;
