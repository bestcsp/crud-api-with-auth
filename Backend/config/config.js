const config = () => {
  const env = process.env;
  const getValue = (value) => {
    if (process.env[value]) return process.env[value];
    throw new Error(`${value} is not available in Environment File`);
  };
  let config = {};
  if (env == "prod") {
    config["DB_URL"] = getValue(DB_URL);
    config["jwt_secret"] = getValue(jwt_secret);
    config["PORT"] = getValue(PORT);
  } else {
    config["DB_URL"] = getValue("MONGO_URI");
    config["jwt_secret"] = getValue("jwt_secret");
    config["PORT"] = getValue("PORT");
  }

  return config;
};
module.exports = config;
