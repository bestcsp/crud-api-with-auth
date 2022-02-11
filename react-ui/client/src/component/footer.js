import { Card } from "react-bootstrap/";

const Footer = () => {
  return (
    <>
      <Card>
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
