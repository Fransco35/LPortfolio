import { Container, Row, Col, Form } from "react-bootstrap";
import { EnvelopeAtFill, Linkedin } from "react-bootstrap-icons";
import ToggleContext from "../../context/toggle-context";
import { useContext } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Btn from "../../components/Button";
import "./Contact.css";

function Contact() {
  const ctx = useContext(ToggleContext);
  const [state, handleSubmit] = useForm("mnqkgokp");

  const contactInfoClass = ctx.toggleNav
    ? "contactInfo contactInfoDark"
    : "contactInfo";

  if (state.succeeded) {
    return (
      <section id="contact" className="contact">
        <div className="contactHeading">
          <h6>Get In Touch</h6>
          <h2>Contact Me</h2>
        </div>

        <Container>
          <Row className="contactRow">
            <Col className="contactColOne">
              <div className={contactInfoClass}>
                <EnvelopeAtFill className="contactInfoIcon" size={40} />
                <h5>Email</h5>
                <h6>kizzycole10@gmail.com</h6>
              </div>
              <div className={contactInfoClass}>
                <Linkedin className="contactInfoIcon" size={40} />
                <h5>LinkedIn</h5>
                <h6>Francis Inegbenose</h6>
              </div>
            </Col>

            <Col className="contactColTwo">
              <h2>Successfully Submitted!</h2>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <div className="contactHeading">
        <h6>Get In Touch</h6>
        <h2>Contact Me</h2>
      </div>

      <Container>
        <Row className="contactRow">
          <Col className="contactColOne">
            <div className={contactInfoClass}>
              <EnvelopeAtFill className="contactInfoIcon" size={40} />
              <h5>Email</h5>
              <h6>francisinose@yahoo.com</h6>
            </div>
            <div className={contactInfoClass}>
              <Linkedin className="contactInfoIcon" size={40} />
              <h5>LinkedIn</h5>
              <h6>Francis Inegbenose</h6>
            </div>
          </Col>

          <Col className="contactColTwo">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  id="name"
                  name="name"
                  className="contactInput"
                  type="text"
                  placeholder="Enter Your Name"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  id="email"
                  name="email"
                  className="contactInput"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  id="message"
                  name="message"
                  as="textarea"
                  className="contactTextArea"
                  rows={7}
                  placeholder="Purpose of Contact"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </Form.Group>
              <Btn variant="primary" type="submit" disabled={state.submitting}>
                Submit
              </Btn>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
