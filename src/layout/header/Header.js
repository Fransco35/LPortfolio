import { Button, Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { MoonFill, SunFill } from "react-bootstrap-icons";
import "./Header.css";
import ToggleContext from "../../context/toggle-context";
import { useContext } from "react";
import { Reveal } from "../../animate/Reveal";

function Header() {
  const ctx = useContext(ToggleContext);

  const headerClass = ctx.toggleNav ? "header headerDark" : "header";
  const navBar = ctx.toggleNav ? "navbar navbarDark" : "navbar";
  const navBrand = ctx.toggleNav ? "navBrand navBrandDark" : "navBrand";
  const navToggle = ctx.toggleNav ? " navToggle" : " ";

  return (
    <header id="home" className={headerClass}>
      <Navbar expand="lg" className={`navbar ${navBar}`}>
        <Container>
          <Navbar.Brand href="home" className={navBrand}>
            <img
              alt="francis inegebenose logo"
              src="fi-navlogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Francis
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={navToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="navLink" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="navLink" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="navLink" href="#skills">
                Skills
              </Nav.Link>
              <Nav.Link className="navLink" href="#portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link className="navLink" href="#contact">
                Contact
              </Nav.Link>
              <Nav.Link className="navLink">
                {" "}
                {ctx.toggleNav ? (
                  <SunFill onClick={ctx.handletoggle} size={20} />
                ) : (
                  <MoonFill onClick={ctx.handletoggle} size={20} />
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col className="headerColOne" md={12} lg={6}>
            <div className="headerColOneContent">
              <Reveal>
                <h6>hello, i'm a</h6>
              </Reveal>
              <Reveal>
                <h1>
                  <span className="headerSpanOne">Frontend/Fullstack</span>
                  <span className="headerSpanTwo">Engineer</span>
                </h1>
              </Reveal>
              <Reveal>
                <p>
                  Hi, I'm Francis Inegbenose, a passionate Frontend/Fullstack
                  Engineer based in Nigeria. Welcome to my profile
                </p>
              </Reveal>
              <Reveal>
                <Button variant="outline-primary" size="lg" href="#contact">
                  Contact Me
                </Button>
              </Reveal>
            </div>
          </Col>
          <Col className="headerColTwo" md={12} lg={6}>
            <img
              className="headerImage"
              alt="Francis Inegbenose || Full Stack Engineer"
              src="headerimg.png"
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
