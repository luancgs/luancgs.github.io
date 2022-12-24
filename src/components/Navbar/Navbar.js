import './Navbar.css';

import { useState } from 'react';

import { DarkModeSwitch } from 'react-toggle-dark-mode';

import ProfilePicture from './ProfilePicture';
import SocialIcons from './SocialIcons/SocialIcons';

const paths = [
  ['#about', 'Sobre mim'],
  ['#experience', 'Experiência'],
  ['#education', 'Formação'],
  ['#skills', 'Habilidades'],
];

let pathsList = paths.map((item, index) => {
  let id = item[0];
  let text = item[1];
  return (
    <li>
      <a href={id}>{text}</a>
    </li>
  );
});

function Navbar() {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = (checked) => {
    let elem = document.getElementById('app');
    elem.classList.toggle('light-mode');
    setDarkMode(checked);
  };

  return (
    <div className="Navbar Color-changer">
      <nav>
        <ProfilePicture />
        <div className="SocialIcons">
          <SocialIcons />
        </div>
        <hr className="Horizontal-line" />
        <div className="Routes">
          <ul>{pathsList}</ul>
        </div>
        <div className="Dark-mode-switch-container">
          <DarkModeSwitch
            style={{ marginBottom: '1rem' }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={40}
            moonColor="#3E0870"
            sunColor="#A85AF2"
          />
        </div>
      </nav>
      <hr className="Vertical-line" />
    </div>
  );
}

export default Navbar;
