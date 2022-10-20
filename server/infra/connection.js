require("dotenv").config(
  {
    path: "../../.env"
  }
);
const pg = require("pg-promise")();
const bd = pg({
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '1231231235',
  host: process.env.DB_HOST || 'dbhackadev.crx3ubuundlz.sa-east-1.rds.amazonaws.com',
  port: process.env.DB_PORT || '5432',
  database: process.env.DB_NAME || 'bd_loja',
});

module.exports = bd;
