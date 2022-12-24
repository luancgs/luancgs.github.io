import '../Navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const mastodonURL = 'https://joinmastodon.org';

function Mastodon() {
  return (
    <li>
      <div className="Social-icon">
        <a href={mastodonURL}>
          <FontAwesomeIcon icon="fa-brands fa-mastodon" size="2x" />
        </a>
      </div>
    </li>
  );
}

export default Mastodon;
