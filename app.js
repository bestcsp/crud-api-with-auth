require("dotenv").config();
require("./config/database").connect();
global.User = require("./model/user");
const express = require("express");

const app = express();

app.use(express.json());
// const router = express.Router();
console.log("On app.js", User)

const { signup, signin, getAllUsers,
    updateLoggedUser, search, requireSignin } = require('./User/UserView')

app.post('/signup', signup)
app.post('/signin', signin)
//   list api for all users with token and pagination  
app.get('/getAllUsers', requireSignin, getAllUsers)
app.post('/updateLoggedUserDetails', requireSignin, updateLoggedUser)
app.get('/searchData', requireSignin, search)


module.exports = app;