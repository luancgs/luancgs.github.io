import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLinkedin,
  faGithub,
  faMastodon,
  faDocker,
  faGitAlt,
  faPython,
  faNode,
  faLinux,
  faGolang,
  faJava,
  faJsSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Navbar from './components/Navbar/Navbar';

import About from './components/ContentSections/About';
import Education from './components/ContentSections/Education';
import Experience from './components/ContentSections/Experience';
import Skills from './components/ContentSections/Skills';

library.add(
  faLinkedin,
  faGithub,
  faMastodon,
  faEnvelope,
  faDocker,
  faGitAlt,
  faPython,
  faNode,
  faLinux,
  faGolang,
  faJava,
  faJsSquare
);

function App() {
  return (
    <div className="app color-changer" id="app">
      <Navbar />
      <div className="content-area">
        <About />
        <hr className="horizontal-separator" />
        <Experience />
        <hr className="horizontal-separator" />
        <Education />
        <hr className="horizontal-separator" />
        <Skills />
      </div>
    </div>
  );
}

export default App;
