import { SectionBackground } from '../SectionBackground';
import P from 'prop-types';

export function SkillsSection({ background_color, text_grid }) {
  return (
    <div className>
      <SectionBackground background={background_color}>
        <div className="flex flex-col items-center text-center main-container pb-9">
          <h1 className="py-4 text-lg tracking-widest text-white uppercase">
            skills
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-white">
            {text_grid.map((el) => (
              <div className="text-white rounded-lg " key={el.title}>
                <div className="flex flex-col justify-center p-5 bg-gray-700 rounded-lg ">
                  <div
                    className="text-7xl "
                    dangerouslySetInnerHTML={{ __html: el.svg }}
                  />

                  <p className="mt-1 ">{el.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}
SkillsSection.propTypes = {
  background_color: P.string,
  text_grid: P.node.array,
};
