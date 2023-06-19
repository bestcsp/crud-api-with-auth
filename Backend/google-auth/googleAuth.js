const passport = require("passport");
const passportConfig = require("../config/passport");
const jsonwebtoken = require("jsonwebtoken");


module.exports = (app) => {
  app.get("/auth/test", (req, res) => {
    res.send("Auth Working properly");
  });
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    async(req, res) => {
      console.log("in gauth callback",req.user,User)
      // res.redirect(200, 'http://localhost:3000/profile', { host: 'localhost:3000' });
      const user = await User.findOne({ email: req.user.email })

      const token = jsonwebtoken.sign({ _id: user._id }, config.jwt_secret, {
        expiresIn: "9h",
      });
      res.redirect(`${config.redirecUrl}/profile?google=${token}`);
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
