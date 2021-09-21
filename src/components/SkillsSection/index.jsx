import { SectionBackground } from '../SectionBackground';
import { DiReact } from 'react-icons/di';

export function SkillsSection() {
  return (
    <div className>
      <SectionBackground background={false}>
        <div className="flex flex-col items-center py-10 text-center main-container">
          <h1 className="pb-10 text-white">skills</h1>
          <div className="text-white">
            <div className="flex flex-col items-center p-5 bg-gray-700 rounded-lg">
              <DiReact size={30} />
              <p>React</p>
            </div>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}
