import { Container, Row, Col, Card, Button, Stack } from "react-bootstrap";

import "./Portfolio.css";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolioHeading">
        <h6>Some of My Works</h6>
        <h2>Projects</h2>
      </div>

      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }} className="portfolioCard">
              <Card.Img variant="top" src="SoloChatMsg.png" />
              <Card.Body>
                <Card.Title className="portfolioTitle">SoloChat</Card.Title>
                <Card.Text>
                  Built the new user interface of SoloChat messenger, a unique
                  messaging application for SoloChat Limited
                </Card.Text>
                <Stack direction="horizontal" className="hstack" gap={2}>
                  <Button variant="outline-primary">
                    <a href="https://solochat.me">Visit</a>
                  </Button>
                </Stack>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }} className="portfolioCard">
              <Card.Img variant="top" src="riseblog-min.png" />
              <Card.Body>
                <Card.Title className="portfolioTitle">Rise Blog</Card.Title>
                <Card.Text>
                  Fullstack blogging application. Built with Reactjs, Nodejs and
                  MongoDB
                  <Stack direction="horizontal" className="hstack" gap={2}>
                    <Button variant="outline-primary">
                      <a href="https://riseblog.onrender.com"> Live Demo</a>
                    </Button>
                    <Button variant="outline-primary">
                      <a href="https://github.com/Fransco35/mern-blog-app">
                        Github
                      </a>
                    </Button>
                  </Stack>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }} className="portfolioCard">
              <Card.Img variant="top" src="medpal.png" />
              <Card.Body>
                <Card.Title className="portfolioTitle">MedPal</Card.Title>
                <Card.Text>
                  This is a health tech app that enables healthcare
                  professionals track patients adherence to medications and
                  enables patients set auto-reminders for medication timing and
                  dosage.
                </Card.Text>
                <Stack direction="horizontal" className="hstack" gap={2}>
                  <Button variant="outline-primary">
                    <a href="https://github.com/Klusterton-90">Github</a>
                  </Button>
                </Stack>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
