import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Header from "./layout/header/Header";
import About from "./layout/about/About";
import Skills from "./layout/skills/Skills";
import Portfolio from "./layout/portfolio/Portfolio";
import Contact from "./layout/contact/Contact";
import Footer from "./layout/footer/Footer";
import ToggleContext from "./context/toggle-context";

import { useState } from "react";

function App() {
  const [toggleNav, setToogleNav] = useState(false);

  const handletoggle = () => {
    setToogleNav((prevState) => !prevState);
  };

  const AppClass = toggleNav ? "App appDark" : "App";

  return (
    <ToggleContext.Provider
      value={{
        toggleNav: toggleNav,
        handletoggle: handletoggle,
      }}
    >
      <div className={AppClass}>
        <Header />
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,128L60,122.7C120,117,240,107,360,90.7C480,75,600,53,720,64C840,75,960,117,1080,112C1200,107,1320,53,1380,26.7L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <About />
        <Skills />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ marginBottom: "-5px" }}
        >
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,64L24,58.7C48,53,96,43,144,37.3C192,32,240,32,288,48C336,64,384,96,432,138.7C480,181,528,235,576,218.7C624,203,672,117,720,122.7C768,128,816,224,864,245.3C912,267,960,213,1008,213.3C1056,213,1104,267,1152,261.3C1200,256,1248,192,1296,149.3C1344,107,1392,85,1416,74.7L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
        <Portfolio />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ marginTop: "-5px" }}
        >
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,64L24,58.7C48,53,96,43,144,37.3C192,32,240,32,288,48C336,64,384,96,432,138.7C480,181,528,235,576,218.7C624,203,672,117,720,122.7C768,128,816,224,864,245.3C912,267,960,213,1008,213.3C1056,213,1104,267,1152,261.3C1200,256,1248,192,1296,149.3C1344,107,1392,85,1416,74.7L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          ></path>
        </svg>
        <Contact />
        <Footer />
      </div>
    </ToggleContext.Provider>
  );
}

export default App;
