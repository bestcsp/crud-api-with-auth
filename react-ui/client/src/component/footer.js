import { Card } from "react-bootstrap/";
const style={
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
  textalign: "center",
}

const Footer = () => {
  return (
    <>
      <Card style={style}>
        <Card.Header>CSP</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>So we can include the footer and it's detail here</p>
            <footer className="blockquote-footer">
              I am  <cite title="Source Title">Chander Shekhar </cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
};
export default Footer;
