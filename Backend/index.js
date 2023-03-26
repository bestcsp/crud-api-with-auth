const configuration = require("./config/config");
global.config = configuration();
const server = require("./app");

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// server listening
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
