import { Card } from "react-bootstrap/";
import Layout from "./homeadded";
import { useEffect, useState } from "react";
import checkLoggedIn from "../checkLoggedIn";
import PostApiCall from "../api_call";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const [userdetail, setUserDetail] = useState({});
  useEffect(() => {
    const token = checkLoggedIn();
    const data = {
      Authorization: `Bearer ${token}`,
    };
    console.log("UI.UserProfile", data);
    if (token) {
      PostApiCall(null,"/getUserDetails",token,"get")
        .then((resp) => {
          const {response} =JSON.parse(resp);
          console.log("profile.resp", response);
          setUserDetail(response);
        })
        .catch((err) => {
          console.error(err);
          localStorage.clear();
        });
    }
  }, []);
  return userdetail ? (
    <>
      <Layout>
        <div className="ProfileCard" style={{display:"flex",}}>
        <Card className="LeftCard"  style={{ width: "18rem" ,height:"18rem" }}>
          {/* <Card.Img src="./jane-fela-yRlqKFirhsE-unsplash.jpg" alt="image"/>           */}
          {/* <Card.Img src="../../../public/logo512.png" style={{height:"100%"}}/>    */}
          <img src='./jane-fela-yRlqKFirhsE-unsplash.jpg' alt="image"/>    

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
