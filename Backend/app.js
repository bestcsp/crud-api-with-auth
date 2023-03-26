require("dotenv").config();
require("./config/database").connect();
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const { User } = require("./model/user");
global.User = User;
const configuration = require("./config/config");
global.config = configuration();
const express = require("express");

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors("*"));

app.use(
  session({
    secret: config.sessionSecretKey,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleClientID,
      clientSecret: config.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("-->", profile, "-->", User);
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({
            googleId: profile.id,
            firstname: profile.displayName,
            lastname: "",
            email: profile.emails[0].value,
            photo: profile.photos[0].value.split("?")[0],
          })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);

const {
  signup,
  signin,
  getAllUsers,
  updateLoggedUser,
  search,
  requireSignin,
  forget_password,
  getUserDetails,
} = require("./User/UserView");
// const mediaStream = require('./VideoComponent/media.routes')

app.post("/signup", signup);
app.post("/signin", signin);
app.post("/forgotPassword", forget_password);
require("./google-auth/googleAuth")(app);
//   list api for all users with token and pagination
app.use(requireSignin);
app.get("/getAllUsers", getAllUsers);
app.get("/getUserDetails", getUserDetails);
app.post("/updateLoggedUserDetails", updateLoggedUser);
app.get("/searchData", search);

//media Stream
// app.use("/upload",mediaStream)

module.exports = app;
