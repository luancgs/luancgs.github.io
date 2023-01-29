import './App.scss';

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
        {/* <AnimationOnScroll
          initiallyVisible={true}
          offset={800}
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={1}
        > */}
        <About />
        {/* </AnimationOnScroll> */}
        <hr className="horizontal-separator" />
        {/* <AnimationOnScroll offset={800} animateIn="animate__fadeIn" animateOut="animate__fadeOut" duration={1}> */}
        <Experience />
        {/* </AnimationOnScroll> */}
        <hr className="horizontal-separator" />
        {/* <AnimationOnScroll offset={800} animateIn="animate__fadeIn" animateOut="animate__fadeOut" duration={1}> */}
        <Education />
        {/* </AnimationOnScroll> */}
        <hr className="horizontal-separator" />
        {/* <AnimationOnScroll offset={800} animateIn="animate__fadeIn" animateOut="animate__fadeOut" duration={1}> */}
        <Skills />
        {/* </AnimationOnScroll> */}
      </div>
    </div>
  );
}

export default App;
