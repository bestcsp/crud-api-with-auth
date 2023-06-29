import Header from "../NAVBAR";

import Footer from "../footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import AlertSection from "../alert";

const Layout = (props) => {
  const [success, setSucess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  console.log(success, "success value", error, message);

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
    
        {props.children}
      <Footer />
    </div>
  );
};
export default Layout;
