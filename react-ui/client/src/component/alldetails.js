import React, {useState, useEffect } from 'react';
import { Card,Button } from "react-bootstrap/";
import Logout from './logout';

var axios = require("axios");



const GetAllRequest = (props) => {
    const [Alldata,setAllData]=useState([])
    // const [token,SetToken] =useState('')
    // SetToken(props.userdetails)
    console.log("props",props.userdetails)

 
    useEffect(() => {
      // console.log("token",props.userdetail.token)
        // Update the document title using the browser API
        var config = {
            method: "get",
            url: "http://localhost:5000/getAllUsers",
            headers: {
              Authorization:
                `Bearer ${props.userdetails}`,
            },
          };
        axios(config)
        .then(function (response) {
          setAllData(response.data)
        })
        .catch(function (error) {
          console.log(error);
          Logout()
        });      },[]);
  return <>
  {Alldata.map(data=>{
      return <Card key={data._id} style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{data.firstname} {data.lastname}</Card.Title>
        <Card.Text>
          Phone :- {data.mobile}
        </Card.Text>
        <Card.Text>
         Email  :-{data.email}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  })}

  
  </>;
};
export default GetAllRequest;
