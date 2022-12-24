import './App.css';

import { AnimationOnScroll } from 'react-animation-on-scroll';
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

import About from './components/ContentSections/About/About';
import Education from './components/ContentSections/Education/Education';
import Experience from './components/ContentSections/Experience/Experience';
import Skills from './components/ContentSections/Skills/Skills';

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
    <div className="App Color-changer" id="app">
      <header>
        <Navbar />
      </header>
      <div className="Content-area">
        <AnimationOnScroll
          initiallyVisible={true}
          offset={800}
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={1}
        >
          <About />
        </AnimationOnScroll>

        <AnimationOnScroll offset={800} animateIn="animate__fadeIn" animateOut="animate__fadeOut" duration={1}>
          <Experience />
        </AnimationOnScroll>

        <AnimationOnScroll offset={800} animateIn="animate__fadeIn" animateOut="animate__fadeOut" duration={1}>
          <Education />
        </AnimationOnScroll>

        <AnimationOnScroll offset={800} animateIn="animate__fadeIn" animateOut="animate__fadeOut" duration={1}>
          <Skills />
        </AnimationOnScroll>
      </div>
    </div>
  );
}

export default App;
