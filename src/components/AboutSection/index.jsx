/* eslint-disable react/prop-types */
import { SectionBackground } from '../SectionBackground';
import { DiReact } from 'react-icons/di';
import { SiNextDotJs } from 'react-icons/si';
import { useTheme } from '../../providers/ThemeContext';

export default function AboutSection({ background }) {
  const darkTheme = useTheme();
  return (
    <div className={`  ${darkTheme ? 'dark' : ' '}`}>
      <SectionBackground background={background}>
        <div className="dark:bg-color_sections_gray">
          <div className="py-10 main-container ">
            <h1 className="flex justify-center pb-14">About me</h1>
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <div className="w-64 p-4 rounded shadow-2xl dark:bg-color_cards_dark">
                <img
                  src="/korea.jpg"
                  alt="popular korea"
                  className="w-full h-64"
                />
                <div className="flex justify-center py-4 ">
                  <DiReact size={36} />
                  <SiNextDotJs size={33} />
                </div>
              </div>
              <div className="pt-5 md:w-3/5">
                <div className="flex items-center bg-gray-100 border rounded-t border-color_dark dark:color_gray_dark dark:bg-gray-700 h-7">
                  <div className="w-3 h-3 mx-1 ml-3 bg-red-600 rounded-full" />
                  <div className="w-3 h-3 mx-1 rounded-full bg-color_yellow" />
                  <div className="w-3 h-3 mx-1 bg-green-500 rounded-full" />
                </div>
                <div className="px-4 pt-10 pb-4 border border-t-0 border-gray-500 rounded-b dark:color_gray_dark dark:border-color_cards_dark dark:text-white">
                  <h1 className="pb-5">Hi :)</h1>
                  <p>
                    👋 Im Ismael Rodino. Fictional person for preview purposes
                    :) Im working with newest front-end frameworks like Angular,
                    React and Vue. What you are seeing now is portfolio template
                    from Dorota1997. If you like this portfolio template, make
                    sure to ⭐ the repository to make it more recognizable for
                    other users. Thank you 💜
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}
