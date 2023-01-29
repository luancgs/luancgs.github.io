import './Navbar.scss';
import Github from './SocialIcons/Github';
import Gmail from './SocialIcons/Gmail';
import Linkedin from './SocialIcons/Linkedin';
import Mastodon from './SocialIcons/Mastodon';

function SocialIcons() {
  return (
    <div className="social-icons">
      <ul>
        <Linkedin />
        <Github />
        <Gmail />
        <Mastodon />
      </ul>
    </div>
  );
}

export default SocialIcons;
