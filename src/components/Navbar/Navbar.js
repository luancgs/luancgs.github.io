import './Navbar.scss';

import ProfilePicture from './ProfilePicture';
import SocialIcons from './SocialIcons';
import DarkModeToggle from './DarkModeToggle';

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
  return (
    <nav className="navbar">
      <header>
        <ProfilePicture />
        <SocialIcons />
        <hr className="horizontal-separator" />
        <div className="routes">
          <ul>{pathsList}</ul>
        </div>
        <DarkModeToggle />
      </header>
      <hr className="vertical-separator" />
    </nav>
  );
}

export default Navbar;
