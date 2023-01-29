import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContentSection.scss';

function Skills() {
  return (
    <div className="content-section" id="skills">
      <div className="Skills">
        <h2>Habilidades</h2>
        <h3>Liguagens de Programação e Ferramentas</h3>
        <div className="tools-list">
          <ul>
            <li>
              <FontAwesomeIcon icon="fa-brands fa-square-js" size="2x" /> +{' '}
              <FontAwesomeIcon icon="fa-brands fa-node" size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon="fa-brands fa-python" size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon="fa-brands fa-java" size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon="fa-brands fa-golang" size="2x" />
            </li>
            <br></br>

            <li>
              <FontAwesomeIcon icon="fa-brands fa-docker" size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon="fa-brands fa-git-alt" size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon="fa-brands fa-linux" size="2x" />
            </li>
          </ul>
        </div>
        <div className="list-skills">
          <h3>Competências</h3>
          <ul>
            <li>
              Desenvolvimento de APIs em <b>Node.js</b> (Javascript e Typescript) utilizando <b>Express</b> e{' '}
              <b>NestJS</b>.
            </li>
            <li>
              Experiência prática em sistemas{' '}
              <b>
                Unix <FontAwesomeIcon icon="fa-brands fa-linux" />
              </b>
              .
            </li>
            <li>
              Scripts de automação em <b>BASH</b> e <b>Lua</b>.
            </li>
            <li>
              Bancos de dados: <b>MySQL</b>,<b>PostgreSQL</b>, <b>DynamoDB</b> e <b>Redis</b>.
            </li>
            <li>Experiência na produção de BFFs (Backend for Frontend)</li>
            <li>
              Experiência em orquestração de containers através do{' '}
              <b>
                Docker <FontAwesomeIcon icon="fa-brands fa-docker" />
              </b>{' '}
              e <b>Docker Compose</b>.
            </li>
          </ul>
          <h3>Idiomas</h3>
          <ul>
            <li>Inglês: Avançado</li>
            <li>Espanhol: Intermediário</li>
            <li>Português: Nativo</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
