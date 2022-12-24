import '../Navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const gmailURL = 'mailto:luan.carlos.3174@gmail.com';

function Gmail() {
  return (
    <li>
      <div className="Social-icon">
        <a href={gmailURL}>
          <FontAwesomeIcon icon="envelope" size="2x" />
        </a>
      </div>
    </li>
  );
}

export default Gmail;
