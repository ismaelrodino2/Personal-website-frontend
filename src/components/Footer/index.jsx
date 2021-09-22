import { SectionBackground } from '../SectionBackground';
import { SiNextDotJs } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import P from 'prop-types';
import { mapData } from '../../api/map-data';
export function Footer({ footer }) {
  const dados = require('../../api/dados.json');

  return (
    <SectionBackground background={null}>
      <div className="main-container">
        <div className="flex flex-col items-center justify-center text-white ">
          <div>
            <AiFillGithub />
          </div>
          <div dangerouslySetInnerHTML={{ __html: footer }} />
        </div>
      </div>
    </SectionBackground>
  );
}
Footer.propTypes = {
  footer: P.string,
};
