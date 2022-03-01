var axios = require('axios');

const PostApiCall=(data,url_endpoint,token,request_type)=>{
    let url=process.env.REACT_APP_API_URL+url_endpoint

    // var data = JSON.stringify({
    //   "email": "cs@gmail.com",
    //   "password": "Work@1csp"
    // });
    
    var config = {
      method: request_type,
      url: url,
      headers: { 
        'Authorization': 'Bearer '+token, 
        'Content-Type': 'application/json'
      },
      data : data
    };
    console.log("config or Post api call method",config)
    return new Promise((resolve,reject)=>{
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      resolve(JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error);
      reject(error)
      });
    })

}
export default PostApiCall;