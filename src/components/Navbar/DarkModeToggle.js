import './Navbar.scss';
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function DarkModeToggle() {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = (checked) => {
    let elem = document.getElementById('app');
    elem.classList.toggle('light-mode');
    setDarkMode(checked);
  };

  return (
    <div className="dark-mode-toggle">
      <DarkModeSwitch
        style={{ marginBottom: '1rem' }}
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={40}
        moonColor="#8839ef"
        sunColor="#cba6f7"
      />
    </div>
  );
}

export default DarkModeToggle;
