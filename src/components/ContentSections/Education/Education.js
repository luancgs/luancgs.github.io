import '../ContentSection.scss';

import UFU from './UFU';
import IFAL from './IFAL';

function Education() {
  return (
    <div className="Content-section" id="education">
      <div>
        <h2>Formação</h2>
        <ul>
          <UFU />
          <IFAL />
        </ul>
      </div>
    </div>
  );
}

export default Education;
