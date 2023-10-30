import { Container, Row, Col, Button } from "react-bootstrap";
import "./About.css";
import ToggleContext from "../../context/toggle-context";
import { useContext } from "react";
import { RevealTwo } from "../../animate/Reveal";

function About() {
  const ctx = useContext(ToggleContext);

  const aboutClass = ctx.toggleNav ? "about aboutDark" : "about";

  return (
    <section id="about" className={aboutClass}>
      <Container>
        <Row className="aboutRow">
          <Col
            className="aboutColOne"
            xs={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            md={{ span: 12, order: 2 }}
            lg={{ span: 6, order: 1 }}
          >
            <div className="aboutColCircle"></div>
            <img
              className="aboutColImg"
              src="headerimg.png"
              alt="Francis Inegbenose || Full stack engineer"
            />
          </Col>
          <Col
            className="aboutColTwo"
            xs={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            md={{ span: 12, order: 1 }}
            lg={{ span: 6, order: 2 }}
          >
            <div className="aboutColTwoContent">
              <RevealTwo>
                <h6>Get to know</h6>
              </RevealTwo>
              <RevealTwo>
                <h2>About me</h2>
              </RevealTwo>
              <RevealTwo>
                <p>
                  Francis is a Fullstack Developer who is skilled in working on
                  both client and server side interfaces and enjoys building
                  well optimized and scalable web applications. His major tech
                  stack includes Reactjs for frontend and Nodejs for backend
                  development.
                  <br />
                  He enjoys learning new technologies and loves working with
                  communicative and collaborative development teams to produce
                  high quality results.
                </p>
              </RevealTwo>
              <RevealTwo>
                <Button variant="outline-primary" size="lg" href="#contact">
                  Let's talk
                </Button>
              </RevealTwo>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
