import { Container, Row, Col, Card, Stack } from "react-bootstrap";
import Btn from "../../components/Button";

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
            <Card className="portfolioCard">
              <Card.Img variant="top" src="portfolioSite.png" />
              <Card.Body>
                <Card.Title className="portfolioTitle">
                  Portfolio App
                </Card.Title>
                <Card.Text>
                  My current portfolio website built with Bootstrap and
                  React.js.It features a: <br /> - Fully responsive layout
                  <br /> - Dynamic contact form <br /> - Toggler color scheme
                  between light and dark mode <br /> - Reveal animation using
                  framer-motion
                </Card.Text>
                <Stack direction="horizontal" className="hstack" gap={2}>
                  <Btn variant="outline-primary">
                    <a href="https://francisinegbenose.vercel.app">
                      Preview Site
                    </a>
                  </Btn>
                  <Btn variant="outline-primary">
                    <a href="https://github.com/Fransco35/LPortfolio">
                      View Code
                    </a>
                  </Btn>
                </Stack>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="portfolioCard">
              <Card.Img variant="top" src="REST-countries.png" />
              <Card.Body>
                <Card.Title className="portfolioTitle">
                  REST Countries API
                </Card.Title>
                <Card.Text>
                  This is a responsive Reactjs frontend application which
                  enables users to:
                  <br /> - Fully responsive layout <br /> - See all countries
                  from the API on the homepage, <br /> - Search for a country
                  using an input field, <br /> - Filter countries by region,{" "}
                  <br /> - Click on a country to see more detailed information
                  on a separate page, <br /> - Click through to the border
                  countries on the detail page, <br /> - Toggle the color scheme
                  between light and dark mode
                </Card.Text>
                <Stack direction="horizontal" className="hstack" gap={2}>
                  <Btn variant="outline-primary">
                    <a href="https://rest-countries-reactjs.vercel.app/">
                      Preview Site
                    </a>
                  </Btn>
                  <Btn variant="outline-primary">
                    <a href="https://github.com/Fransco35/rest-countries-react-app">
                      View Code
                    </a>
                  </Btn>
                </Stack>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="portfolioCard">
              <Card.Img variant="top" src="riseblog-min.png" />
              <Card.Body>
                <Card.Title className="portfolioTitle">Rise Blog</Card.Title>
                <Card.Text>
                  This is a fullstack blog app built with React.js, Node.js and
                  MongoDB. User are able to:
                  <br /> - Fully responsive layout <br /> - Click on a blog
                  article to see more detailed information on a separate page{" "}
                  <br /> - Drop comments on blog articles, <br />
                  - Sign up and log in to post blog articles. <br /> - Write and
                  post articles (for registered users only).
                  <Stack direction="horizontal" className="hstack" gap={2}>
                    <Btn variant="outline-primary">
                      <a href="https://riseblog.onrender.com"> Preview Site</a>
                    </Btn>
                    <Btn variant="outline-primary">
                      <a href="https://github.com/Fransco35/mern-blog-app">
                        View Code
                      </a>
                    </Btn>
                  </Stack>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="portfolioCard">
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
                  <Btn variant="outline-primary">
                    <a href="https://github.com/Klusterton-90">View Code</a>
                  </Btn>
                </Stack>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="portfolioCard">
              <Card.Img variant="top" src="tasktrackerapp.png" />
              <Card.Body>
                <Card.Title className="portfolioTitle">
                  Task Tracker App
                </Card.Title>
                <Card.Text>
                  This is a frontend task tracker application built with
                  React.js. Users are able to :<br /> - Fully responsive layout{" "}
                  <br /> - Create tasks, <br /> - Read tasks, <br /> - Edit and
                  Update tasks, <br /> - Delete tasks, <br /> - Toggle
                  completion mode on or off <br /> - Toggle reminder on or off
                </Card.Text>
                <Stack direction="horizontal" className="hstack" gap={2}>
                  <Btn variant="outline-primary">
                    <a href="https://task-tracker-app-phi.vercel.app/">
                      Preview Site
                    </a>
                  </Btn>
                  <Btn variant="outline-primary">
                    <a href="https://github.com/Fransco35/TaskTrackerApp">
                      View Code
                    </a>
                  </Btn>
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
