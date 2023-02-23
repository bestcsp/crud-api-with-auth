import { Form, Button, Alert, Container } from "react-bootstrap/";
import { useEffect, useState } from "react";
import validator from "validator";

const ResetPasswordForm = () => {
  const [password, setpassword] = useState("");
  const [password1, setpassword1] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const validate = (value) => {
      if (
        validator.isStrongPassword(value, {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        })
      ) {
        return true;
      } else {
        return false;
      }
    };

    if (password && password1) {
      if (validate(password)) {

      } else {
        setError("Password Validation Failed, Please check the all password");
        return;
      }
    } else {
      setError("Please Fill Both Password");
      return;
    }
  }
  useEffect(()=>{
    setTimeout(() => {
        setError("")
    }, 2000);
  },[error])
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="firstname">
            <Form.Label>Enter Your Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <Form.Text value={password} className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="firstname">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Confirm Your Password"
              onChange={(e) => setpassword1(e.target.value)}
            />
            <Form.Text value={password1} className="text-muted"></Form.Text>
          </Form.Group>
          {error ? (
            <Alert key={"1"} variant={"danger"}>
              {error} 
            </Alert>
          ) : (
            ""
          )}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default ResetPasswordForm;
