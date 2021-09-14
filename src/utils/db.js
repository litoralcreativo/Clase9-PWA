const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB,
    pool: { min: 1, max: 10 },
  },
});

module.exports = knex;
