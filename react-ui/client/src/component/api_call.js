var axios = require("axios");

const PostApiCall = (data, url_endpoint, token, request_type) => {
  let url = process.env.REACT_APP_API_URL + url_endpoint;
  var config = {
    method: request_type,
    url: url,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    data: data,
  };
  console.log("config or Post api call method", config);
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios(config);
      console.log("API.RESPONSE", JSON.stringify(response));
      resolve(JSON.stringify(response.data));
    } catch (error) {
      console.log("API.ERROR", error);
      console.log("API.ERROR", error.body);

      reject(JSON.stringify(error)); //without stringify giving error
    }

    // axios(config)
    // .then(function (response) {
    //   console.log("API.RESPONSE",JSON.stringify(response.data));
    // resolve(JSON.stringify(response.data))
    // })
    // .catch(function (error) {
    //   console.log("API.ERROR",JSON.parse(error));
    // reject(error)
    // });
  });
};
export default PostApiCall;
