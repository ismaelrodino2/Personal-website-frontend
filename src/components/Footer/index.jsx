import { SectionBackground } from '../SectionBackground';
import { SiNextDotJs } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import P from 'prop-types';
import { mapData } from '../../api/map-data';
export function Footer({ footer }) {
  const dados = require('../../api/dados.json');
  console.log(mapData(dados));

  return (
    <SectionBackground background={true}>
      <div classNameName="main-container">
        <div className="flex flex-col items-center justify-center text-white bg-black">
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
