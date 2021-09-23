/* eslint-disable react/prop-types */
import { useTheme } from '../../providers/ThemeContext';
import { SectionBackground } from '../SectionBackground';
import './styles.css';

export function ProjectsSection({ background }) {
  const darkTheme = useTheme();

  return (
    <div className={`  ${darkTheme ? 'dark' : ' '}`}>
      <SectionBackground background={background}>
        <div className="dark:bg-gray-600">
          <div className="flex flex-col items-center py-10 text-center main-container">
            <h1 className="pb-10">Projects</h1>
            <div className="flex flex-col flex-wrap items-center justify-center w-full md:flex-row">
              <div className="flex-row w-1/2 p-2 bg-white md:w-1/2 lg:w-1/3 dark:bg-gray-700">
                <img src="/teste.jpg" alt="asd" />
                <span className="px-2 pb-1 text-white bg-gray-500 rounded-b-lg ">
                  02/08/2021
                </span>
                <h1>LandingPages</h1>
              </div>
              <div className="flex-row w-1/2 p-2 bg-white md:w-1/2 lg:w-1/3 dark:bg-gray-700">
                <img src="/teste.jpg" alt="asd" />
                <span className="px-2 pb-1 text-white bg-gray-500 rounded-b-lg ">
                  02/08/2021
                </span>
                <h1>LandingPages</h1>
              </div>
              <div className="flex-row w-1/2 p-2 bg-white md:w-1/2 lg:w-1/3 dark:bg-gray-700">
                <img src="/teste.jpg" alt="asd" />
                <span className="px-2 pb-1 text-white bg-gray-500 rounded-b-lg ">
                  02/08/2021
                </span>
                <h1>LandingPages</h1>
              </div>
            </div>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}
