import { Display, DatabaseFillGear, Layers } from "react-bootstrap-icons";
import "./Skills.css";
import ToggleContext from "../../context/toggle-context";
import { useContext } from "react";
import { Reveal, RevealTwo } from "../../animate/Reveal";

function Skills() {
  const ctx = useContext(ToggleContext);

  const skillsClass = ctx.toggleNav ? "skills skillsDark" : "skills";
  const skillsColClass = ctx.toggleNav
    ? "skillsCol skillsColDark"
    : "skillsCol";

  return (
    <section id="skills" className={skillsClass}>
      <div className="skillsHeading">
        <Reveal>
          <h6>Technical Skills I have</h6>
        </Reveal>
        <Reveal>
          <h2>My Services</h2>
        </Reveal>
      </div>

      <div className="skillsContainer">
        <div className="skillsRow">
          <div className={skillsColClass}>
            <RevealTwo>
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
            </RevealTwo>
          </div>
          <div className={skillsColClass}>
            <RevealTwo>
              <DatabaseFillGear className="skillColIcon" size={90} />
              <h2>Backend Development</h2>
              <ul>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>NextJS</li>
                <li>Restful APIs</li>
                <li>Redis</li>
              </ul>
            </RevealTwo>
          </div>
          <div className={skillsColClass}>
            <RevealTwo>
              <Layers className="skillColIcon" size={90} />
              <h2>Other Technical Skills</h2>
              <ul>
                <li>Git & Github</li>
                <li>Code Optimization</li>
                <li>TypeScript</li>
                <li>Firebase</li>
              </ul>
            </RevealTwo>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
