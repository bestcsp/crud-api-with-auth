import { Card } from "react-bootstrap/";
import Layout from "./homeadded";
import { useEffect, useState } from "react";
import checkLoggedIn from "../checkLoggedIn";
import PostApiCall from "../api_call";
import { Navigate } from "react-router-dom";
import AlertSection from "../alert";

const Profile = () => {
  const [userdetail, setUserDetail] = useState({});
  const [success, setSucess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    let token = checkLoggedIn();
    const data = {
      Authorization: `Bearer ${token}`,
    };
    console.log("UI.UserProfile", data,);
    const gauthurl=window.location.href;
    if(gauthurl.includes('google')){
      setTimeout(()=>{
        window.location.href=window.location.href.split("?")[0]
      },1000)
      setSucess(true)
      setMessage("User sign in Successfully")
      function getCookie() {                
          let urlParams = new URL(gauthurl)
          return urlParams.searchParams.get("google");
      }      
      const userData = getCookie();
      if(userData) {
        token=userData;
      }
    }
    if (token) {
      PostApiCall(null,"/getUserDetails",token,"get")
        .then((resp) => {
          const {response} =JSON.parse(resp);
          localStorage.setItem('user', JSON.stringify({user:{...response,token,"message":"User sign in Successfully"}}));
          console.log("profile.resp", response);          
          setUserDetail(response);
        })
        .catch((err) => {
          console.error("-->",err);
          localStorage.clear();
        });
    }
  }, []);
  return userdetail ? (
    <>
    {success ? (
        <AlertSection
          success={success}
          message={message}
          setSucess={setSucess}
          setError={setError}
          setMessage={setMessage}
        />
      ) : error ? (
        <AlertSection
          error={error}
          setError={setError}
          setSucess={setSucess}
          message={message}
          setMessage={setMessage}
        />
      ) : (
        ""
      )}
      <Layout>
        <div className="ProfileCard" style={{display:"flex",}}>
        <Card className="LeftCard"  style={{ width: "18rem" ,height:"18rem" }}>
          {/* <Card.Img src="./jane-fela-yRlqKFirhsE-unsplash.jpg" alt="image"/>           */}
          {/* <Card.Img src="../../../public/logo512.png" style={{height:"100%"}}/>    */}
          <img src={userdetail.photo} alt="profilephoto"/>    

        </Card>
        <Card className="RightCard" style={{ width: "25rem"}}>
          <Card.Body>
            <Card.Text><b>First Name       :</b>`{userdetail.firstname}`</Card.Text>
            <Card.Text><b>Last Name       :</b>`{userdetail.lastname}`</Card.Text>
            <Card.Text><b>Email       :</b>`{userdetail.email}`</Card.Text>
            <Card.Text><b>Mobile       :</b>`{userdetail.mobile}`</Card.Text>
          </Card.Body>
        </Card>
        </div>
        
      </Layout>
    </>
  ) : (
    <Navigate replace to="/login" />
  );
};
export default Profile;
