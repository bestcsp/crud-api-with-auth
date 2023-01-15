import Header from "../NAVBAR";

import Footer from "../footer";
import "bootstrap/dist/css/bootstrap.min.css";
import GetAllRequest from "../alldetails";
import { useState } from "react";
import AlertSection from "../alert";

const Home = (props) => {
  const [success, setSucess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  console.log(success, "success value", error, message);
  const loggedUser = 0 || localStorage.getItem("user");

  return (
    <div className="App">
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
      <Header
        setSucess={setSucess}
        setError={setError}
        setMessage={setMessage}
      />
      {loggedUser ? (
        <GetAllRequest userdetails={JSON.parse(loggedUser).token} />
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
};
export default Home;
