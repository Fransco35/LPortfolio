import { Display, DatabaseFillGear, Layers } from "react-bootstrap-icons";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skillsHeading">
        <h6>Technical Skills I have</h6>
        <h2>My Services</h2>
      </div>

      <div className="skillsContainer">
        <div className="skillsRow">
          <div className="skillsCol">
            <Display className="skillColIcon" size={90} />
            <h2>Frontend Development</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>React.js</li>
              <li>Redux & Redux Toolkit</li>
              <li>NextJS</li>
            </ul>
          </div>
          <div className="skillsCol">
            <DatabaseFillGear className="skillColIcon" size={90} />
            <h2>Backend Development</h2>
            <ul>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>NextJS</li>
              <li>Restful APIs</li>
              <li>Redis</li>
            </ul>
          </div>
          <div className="skillsCol">
            <Layers className="skillColIcon" size={90} />
            <h2>Other Technical Skills</h2>
            <ul>
              <li>Git & Github</li>
              <li>Code Optimization</li>
              <li>TypeScript</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
