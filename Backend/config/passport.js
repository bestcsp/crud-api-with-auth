// const mongoose = require("mongoose");
// const User = mongoose.model("users");
const passport = require("passport");
// const { User } = require("../model/user");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const keys = require("../config/config.js");
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});
