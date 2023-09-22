import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
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
              <h6>Get to know</h6>
              <h2>About me</h2>

              <p>
                Francis is a Fullstack Developer who is skilled in working on
                both client and server side interfaces and enjoys building well
                optimized and scalable web applications. His major tech stack
                includes Reactjs for frontend and Nodejs for backend
                development.
                <br />
                He enjoys learning new technologies and loves working with
                communicative and collaborative development teams to produce
                high quality results.
              </p>
              <Stack direction="horizontal" className="hstack" gap={2}>
                <Button variant="outline-primary" size="lg" href="#contact">
                  Let's Talk
                </Button>
                <Button variant="primary" size="lg">
                  Download CV
                </Button>
              </Stack>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
