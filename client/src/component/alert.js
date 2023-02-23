import { Alert } from "react-bootstrap/";
import { useState } from "react";



const AlertSection = (props) => {
    const [ setShow] = useState(true);
    let variant;
    let message=props.success?"Successfully done":props.error?"Oh snap! You got an error!":''
    variant=props.success?'success':props.error?"danger":''
    setTimeout(() => {
        props.success?props.setSucess(false):props.setError(false)
    }, 2000);
console.log(message,variant,props,"111111111")
  return (
    <Alert variant={variant} onClose={() => setShow(false)} dismissible>
      <Alert.Heading>{message}</Alert.Heading>
      <p>
        {props.message}
      </p>
    </Alert>
  );
};

export default AlertSection;
