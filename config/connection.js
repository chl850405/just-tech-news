//import sequelize constructor from library
const Sequelize = require("sequelize");

const dotenv = require("dotenv");
dotenv.config();

const username = process.env.DB_USER;

const password = process.env.DB_PW;
//create connection to our database, pass in your MySQL information user for user name and password
const sequelize = new Sequelize("just_tech_news_db", username, password, {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;
