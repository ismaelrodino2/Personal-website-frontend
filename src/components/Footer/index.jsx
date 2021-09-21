import { SectionBackground } from '../SectionBackground';
import { SiNextDotJs } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';

export function Footer() {
  return (
    <SectionBackground background={true}>
      <div classNameName="main-container">
        <div className="flex flex-col items-center justify-center text-white bg-black">
          <div>
            <AiFillGithub />
          </div>
          <p>Copyright © Ismael Rodino</p>
        </div>
      </div>
    </SectionBackground>
  );
}
