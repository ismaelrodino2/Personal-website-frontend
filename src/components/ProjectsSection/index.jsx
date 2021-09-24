import { useTheme } from '../../providers/ThemeContext';
import { SectionBackground } from '../SectionBackground';
import P from 'prop-types';

export function ProjectsSection({ background_color, image_grid, title }) {
  const darkTheme = useTheme();
  return (
    <div className={`  ${darkTheme ? 'dark' : ' '}`}>
      <SectionBackground background={background_color}>
        <div className="dark:bg-color_header_dark">
          <div className="flex flex-col items-center py-10 text-center main-container">
            <h1 className="pb-10">{title}</h1>
            <div className="flex flex-col flex-wrap items-center justify-center w-full gap-3 md:flex-row">
              {image_grid.map((el) => (
                <div
                  className="flex-row w-1/2 p-2 bg-white md:w-1/2 lg:w-1/3 dark:bg-gray-700"
                  key={`${el.srcImg}${el.altText}`}
                >
                  <img src="/teste.jpg" alt="asd" />
                  <span className="px-2 pb-1 text-white bg-gray-500 rounded-b-lg ">
                    02/08/2021
                  </span>
                  <h1>LandingPages</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}
ProjectsSection.propTypes = {
  background_color: P.string,
  image_grid: P.array,
  title: P.string,
};
