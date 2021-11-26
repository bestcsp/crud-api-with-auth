const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

exports.connect = () => {
  mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connection established...",MONGO_URI))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
};
