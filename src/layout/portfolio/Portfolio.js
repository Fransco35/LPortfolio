import { Container, Row, Col, Card, Button, Stack } from "react-bootstrap";

import "./Portfolio.css";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolioHeading">
        <h6>My Recent Works</h6>
        <h2>My Portfolio</h2>
      </div>

      <Container>
        <Row>
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
              <Card.Img variant="top" src="vvs-min.png" />
              <Card.Body>
                <Card.Title className="portfolioTitle">
                  Visibcon Vet Services
                </Card.Title>
                <Card.Text>
                  Landing page for a Veterinary pharmacetical company. Built
                  with HTML, SASS and jQuery
                </Card.Text>
                <Stack direction="horizontal" className="hstack" gap={2}>
                  <Button variant="outline-primary">
                    <a href="https://fransco35.github.io/VVS/">Live Demo</a>
                  </Button>
                  <Button variant="outline-primary">
                    <a href="https://github.com/Fransco35/VVS">Github</a>
                  </Button>
                </Stack>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="portfolioCard">
              <Card.Img variant="top" src="Sparks .png" />
              <Card.Body>
                <Card.Title className="portfolioTitle">Sparks</Card.Title>
                <Card.Text>
                  Landing Page for an agency built with HTML,CSS and
                  SASS(node-sass)
                </Card.Text>
                <Stack direction="horizontal" className="hstack" gap={2}>
                  <Button variant="outline-primary">Live Demo</Button>
                  <Button variant="outline-primary">Github</Button>
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
