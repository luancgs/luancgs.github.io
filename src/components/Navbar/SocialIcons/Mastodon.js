import '../Navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const mastodonURL = 'https://universeodon.com/@luancgs';

function Mastodon() {
  return (
    <li>
      <div className="social-icon">
        <a href={mastodonURL}>
          <FontAwesomeIcon icon="fa-brands fa-mastodon" size="2x" />
        </a>
      </div>
    </li>
  );
}

export default Mastodon;
