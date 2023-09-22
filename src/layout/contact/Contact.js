import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { EnvelopeAtFill, Whatsapp, Linkedin } from "react-bootstrap-icons";

import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contactHeading">
        <h6>Get In Touch</h6>
        <h2>Contact Me</h2>
      </div>

      <Container>
        <Row className="contactRow">
          <Col className="contactColOne">
            <div className="contactInfo">
              <EnvelopeAtFill className="contactInfoIcon" size={40} />
              <h5>Email</h5>
              <h6>kizzycole10@gmail.com</h6>
            </div>
            <div className="contactInfo">
              <Whatsapp className="contactInfoIcon" size={40} />
              <h5>Whatsapp</h5>
              <h6>+2348153871991</h6>
            </div>
            <div className="contactInfo">
              <Linkedin className="contactInfoIcon" size={40} />
              <h5>LinkedIn</h5>
              <h6>Francis Inegbenose</h6>
            </div>
          </Col>

          <Col className="contactColTwo">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  className="contactInput"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="contactInput"
                  type="email"
                  placeholder="Enter Your Email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  className="contactTextArea"
                  rows={7}
                  placeholder="Purpose of Contact"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
