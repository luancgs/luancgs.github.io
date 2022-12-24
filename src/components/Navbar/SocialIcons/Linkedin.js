import '../Navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const linkedinURL = 'https://www.linkedin.com/in/luan-carlos-gs/';

function Linkedin() {
  return (
    <li>
      <div className="Social-icon">
        <a href={linkedinURL}>
          <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x" />
        </a>
      </div>
    </li>
  );
}

export default Linkedin;
