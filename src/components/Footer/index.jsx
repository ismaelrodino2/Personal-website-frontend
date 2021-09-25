import { SectionBackground } from '../SectionBackground';
import P from 'prop-types';
export function Footer({ background_color, footer_text, icons }) {
  return (
    <SectionBackground background={background_color}>
      <div className="main-container">
        <div className="flex flex-col items-center justify-center text-white ">
          <div>
            <div className="flex flex-row gap-4 pt-8 text-3xl">
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
