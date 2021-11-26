const { User } = require("../model/user")
const jsonwebtoken = require("jsonwebtoken");

exports.signup = (req, res) => {
  console.info("Signup Module")
  // User.User.find()
  User.findOne({ email: req.body.email }, (err, user) => {
    if (user) return res.status(400).json({
      message: "User Already exists with email"
    })
    const { firstname, lastname, email, mobile, password, address } = req.body;
    console.log({ firstname, lastname, email, mobile, password, address })
    const _user = new User({ firstname, lastname, email, password, mobile, address })
    _user.save((err, data) => {
      if (err) return res.status(400).json({ message: err })
      else res.status(200).json({ message: "User Created Succesfully" })
    })
  })
}

exports.signin = (req, res) => {
  console.info("inside signin function")
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) res.status(400).json({ message: err })
    else if (user) {
      console.log("authentication match", user.authenticate(req.body.password))
      if (user.authenticate(req.body.password)) {
        const token = jsonwebtoken.sign({ _id: user._id }, process.env.jwt_secret, { expiresIn: '1h' })
        const { _id, firstname, lastname, fullName, email, role } = user;
        res.status(200).json({
          token: token,
          user: { _id, firstname, lastname, fullName, email, role },
          message: "User sign in Successfully"
        })
      }
      else {
        console.log(req.body)
        res.status(400).json({ message: "Password didn't match try again" })
      }
    }
    else {
      res.status(400).json({ message: "Something went Wrong" })
    }
  })
}

exports.requireSignin = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]
  const user = jsonwebtoken.verify(token, process.env.jwt_secret)
  req.user = user
  next()

}


const getTasks = async (pageSize, page) => {
  const tasks = await User.find({}, '_id firstname lastname mobile email').limit(pageSize).skip(pageSize * page);
  console.log('tasks:::', tasks);
  return tasks;
}
exports.getAllUsers = (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  getTasks(pageSize, page).then(data => res.json(data));
  // User.find()
}

exports.updateLoggedUser = (req, res) => {
  let user = req.user
  console.log("req.user", user)
  const query = req.body
  console.log(query)

  User.updateOne({ _id: user }, query, { multi: true }, function (err, data) {
    res.status(200).json({ message: "User Details Updated", user: data })
  })
}
const Search = async (query, pageSize, page) => {
  const SearchData = await User.find(query).limit(pageSize).skip(pageSize * page);
  return SearchData;
}
exports.search = (req, res) => {
  const filters = req.query;
  console.log("query for filter", filters)
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  Search(filters, pageSize, page).then(data => res.json(data));


}