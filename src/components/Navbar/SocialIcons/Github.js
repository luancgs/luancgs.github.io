import '../Navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const githubURL = 'https://github.com/luancgs';

function Github() {
  return (
    <li>
      <div className="social-icon">
        <a href={githubURL}>
          <FontAwesomeIcon icon="fa-brands fa-github" size="2x" />
        </a>
      </div>
    </li>
  );
}

export default Github;
