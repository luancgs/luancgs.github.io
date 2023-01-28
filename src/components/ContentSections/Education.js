import './ContentSection.scss';

import UFU from './Education/UFU';
import IFAL from './Education/IFAL';

function Education() {
  return (
    <div className="content-section" id="education">
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
