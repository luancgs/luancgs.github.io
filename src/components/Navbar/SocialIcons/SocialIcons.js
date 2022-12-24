import '../Navbar.scss';
import Github from './Github';
import Gmail from './Gmail';
import Linkedin from './Linkedin';
import Mastodon from './Mastodon';

function SocialIcons() {
  return (
    <ul>
      <Linkedin />
      <Github />
      <Gmail />
      <Mastodon />
    </ul>
  );
}

export default SocialIcons;
