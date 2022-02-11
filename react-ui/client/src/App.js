import "./App.css";
import Header from "./component/NAVBAR";
import Footer from "./component/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import GetAllRequest from "./component/alldetails";
import { useState } from "react";
import AlertSection from "./component/alert";
import {BrowserRouter as router,Routes,Route} from 'react-router-dom'


function App() {
  const [success,setSucess]=useState(false)
  const [error,setError]=useState(false)
  const [message,setMessage]=useState('')
  console.log(success,"success value",error,message)


  return (
    <div className="App">
      {success?<AlertSection success={success} message={message} setSucess={setSucess} setError={setError} setMessage={setMessage}/>:error?<AlertSection setError={setError} setSucess={setSucess} setMessage={setMessage}/>:''}
      <Header setSucess={setSucess} setError={setError} setMessage={setMessage}/>
      <GetAllRequest />
      <Footer />
    </div>
  );
}

export default App;
