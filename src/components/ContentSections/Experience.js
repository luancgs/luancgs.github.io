import './ContentSection.scss';
import D3 from './Experience/D3';

function Experience() {
  return (
    <div className="content-section" id="experience">
      <div>
        <h2>Experiências</h2>
        <ul>
          <D3 />
        </ul>
      </div>
    </div>
  );
}

export default Experience;
