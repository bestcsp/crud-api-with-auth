const mongoose = require("mongoose");

exports.connect = () => {
  mongoose
    .connect(config.DB_URL, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    })
    .then(() => console.log("MongoDB connection established...", config.DB_URL))
    .catch((error) =>
      console.error("MongoDB connection failed:", error.message)
    );
};
