const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

var userSchema = new mongoose.Schema({
  firstname: { type: String, required: true, minlength: 3, maxlength: 30 },
  lastname: { type: String, required: true, minlength: 3, maxlength: 30 },
  mobile: { type: String, required: true, unique: true, minlength: 10, maxlength: 12 },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
    unique: true,
    // validate: [validateEmail, 'Please fill a valid email address'],
  },
  address: { type: String, maxlength: 300 },
  hash_password: { type: String, required: true, minlength: 3, maxlength: 1024 },
});

userSchema.virtual('password')
  .set(function (password) {
    this.hash_password = bcrypt.hashSync(password, 10)
  })

userSchema.methods = {
  authenticate: function (password) {
    return bcrypt.compareSync(password, this.hash_password); // true if password match
  }
}

exports.User = mongoose.model("User", userSchema);

// exports.User = User;