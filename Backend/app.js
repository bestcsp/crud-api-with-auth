require("dotenv").config();
require("./config/database").connect();
global.User = require("./model/user");
const express = require("express");

const app = express();
const cors =require('cors')

app.use(express.json());
// const router = express.Router();
console.log("On app.js", User)
app.use(cors('*'))

const { signup, signin, getAllUsers,
    updateLoggedUser, search, requireSignin,forget_password,getUserDetails } = require('./User/UserView')

app.post('/signup', signup)
app.post('/signin', signin)
app.post('/forgotPassword', forget_password)

//   list api for all users with token and pagination  
app.get('/getAllUsers', requireSignin, getAllUsers)
app.get('/getUserDetails', requireSignin, getUserDetails)
app.post('/updateLoggedUserDetails', requireSignin, updateLoggedUser)
app.get('/searchData', requireSignin, search)


module.exports = app;