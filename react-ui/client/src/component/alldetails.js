import React, {useState, useEffect } from 'react';
import { Card,Button,Toast } from "react-bootstrap/";

var axios = require("axios");



const GetAllRequest = () => {
    const [Alldata,setAllData]=useState([])
  

 
    useEffect(() => {
        // Update the document title using the browser API
        var config = {
            method: "get",
            url: "http://localhost:5000/getAllUsers",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZlOWQxMWUzYTQ5NDBjYjQ3MmNmNDUiLCJpYXQiOjE2NDQyMTU1ODQsImV4cCI6MTY0NDI0Nzk4NH0.7YhoADrJfqN8KhxaXCK1FzArIUHeXokUD9P-bQJbbVI",
            },
          };
        axios(config)
        .then(function (response) {
          setAllData(response.data)
        })
        .catch(function (error) {
          console.log(error);
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
