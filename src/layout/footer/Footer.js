import { Linkedin, Github } from "react-bootstrap-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2>Francis Inegbenose</h2>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footerSocial">
        <a href="https://www.linkedin.com/in/francis-inegbenose/">
          <Linkedin className="footerSocialIcon" size={25} />
        </a>
        <a href="https://github.com/Fransco35">
          <Github className="footerSocialIcon" size={25} />
        </a>
      </div>
      <div className="footerCopyright">
        <small> &copy; Francis Inegbenose 2023. </small>
      </div>
    </footer>
  );
}

export default Footer;
