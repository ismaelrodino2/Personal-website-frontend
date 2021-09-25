import { SectionBackground } from '../SectionBackground';
import { SiNextDotJs } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import P from 'prop-types';
import { mapData } from '../../api/map-data';
export function Footer({ background_color, footer_text, icons }) {
  return (
    <SectionBackground background={background_color}>
      <div className="pt-10 main-container">
        <div className="flex flex-col items-center justify-center text-white ">
          <div>
            <div
              className="flex flex-row gap-4 text-3xl pt-14"
              Style={'gap: 20px'}
            >
              {icons.map((el, index) => (
                <a
                  key={`${index}`}
                  dangerouslySetInnerHTML={{ __html: el.svg }}
                  href={el.link}
                  target="_blank"
                  rel="noreferrer"
                />
              ))}
            </div>
          </div>
          <div
            Style={'padding: 15px 0'}
            dangerouslySetInnerHTML={{ __html: footer_text }}
          />
        </div>
      </div>
    </SectionBackground>
  );
}
Footer.propTypes = {
  footer_text: P.string,
  background_color: P.string,
  icons: P.array,
};
