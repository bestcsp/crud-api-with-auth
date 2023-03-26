require("dotenv").config();

const config = () => {
  const env = process.env;
  const runningEnv = process.env.NODE_ENV;
  const getValue = (value) => {
    if (env[`${value}`]) return env[`${value}`];
    throw new Error(`${value} is not available in Environment File`);
  };
  let config = {};
  if (runningEnv == "prod") {
    config["DB_URL"] = getValue("DB_URL");
    config["jwt_secret"] = getValue("jwt_secret");
    config["PORT"] = getValue("PORT");
    config["sessionSecretKey"] = getValue("sessionSecretKey");
  } else {
    config["DB_URL"] = getValue("MONGO_URI");
    config["jwt_secret"] = getValue("jwt_secret");
    config["PORT"] = getValue("PORT");
    config["sessionSecretKey"] = getValue("sessionSecretKey");
  }
  config["googleClientSecret"] = getValue("googleClientSecret");
  config["googleClientID"] = getValue("googleClientID");
  return config;
};
module.exports = config;
