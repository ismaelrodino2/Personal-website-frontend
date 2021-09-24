/* eslint-disable react/prop-types */
import { SectionBackground } from '../SectionBackground';
import { DiReact } from 'react-icons/di';

export function SkillsSection({ background_color, text_grid }) {
  return (
    <div className>
      <SectionBackground background={background_color}>
        <div className="flex flex-col items-center py-10 text-center main-container">
          <h1 className="pb-10 text-white">skills</h1>
          <div className="text-white">
            {text_grid.map((el) => (
              <div className="text-white" key={el.title}>
                <div className="flex flex-col items-center p-5 bg-gray-700 rounded-lg">
                  <div dangerouslySetInnerHTML={{ __html: el.svg }} />

                  <p>{el.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}
