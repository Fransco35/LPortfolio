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
              <Card.Img variant="top" src="portfolioSite.png" />
              <Card.Body>
                <Card.Title className="portfolioTitle">
                  Francis Inegbenose
                </Card.Title>
                <Card.Text>
                  My current portfolio website built with Bootstrap and
                  React.js. Features dynamic contact form and conditional color
                  modes
                </Card.Text>
                <Stack direction="horizontal" className="hstack" gap={2}>
                  <Button variant="outline-primary">
                    <a href="https://francisinegbenose.vercel.app">Visit</a>
                  </Button>
                  <Button variant="outline-primary">
                    <a href="https://github.com/Fransco35/LPortfolio">Github</a>
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
                  Fullstack blogging application. Built with React.js, Node.js
                  and MongoDB. Features sign up, login, blog listing and blog
                  specific pages. Enables creating, posting, reading of blog
                  articles and commenting feature .
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

          <Col>
            <Card style={{ width: "18rem" }} className="portfolioCard">
              <Card.Img variant="top" src="tasktrackerapp.png" />
              <Card.Body>
                <Card.Title className="portfolioTitle">
                  Task Tracker App
                </Card.Title>
                <Card.Text>
                  This is a frontend task tracker application built with
                  React.js. It enables users create, update and delete tasks. It
                  also has a reminder and completion state to track created
                  tasks
                </Card.Text>
                <Stack direction="horizontal" className="hstack" gap={2}>
                  <Button variant="outline-primary">
                    <a href="https://task-tracker-app-phi.vercel.app/">
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline-primary">
                    <a href="https://github.com/Fransco35/TaskTrackerApp">
                      Github
                    </a>
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
