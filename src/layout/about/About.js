import { Container, Row, Col } from "react-bootstrap";
import Btn from "../../components/Button";
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
                  I'm an experienced engineer who works mostly on the frontend.
                  I love building responsive and well optimized applications
                  which are compactible with different browser types. I'm also
                  skilled in backend technologies and worked on building the
                  server-side of various applications.
                  <br />I enjoy learning new technologies and love working with
                  communicative and collaborative development teams to produce
                  high quality results.
                </p>
              </RevealTwo>
              <RevealTwo>
                <Btn variant="outline-primary" size="lg" href="#contact">
                  Let's talk
                </Btn>
              </RevealTwo>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
