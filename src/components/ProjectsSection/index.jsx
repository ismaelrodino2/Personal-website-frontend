import { useTheme } from '../../providers/ThemeContext';
import { SectionBackground } from '../SectionBackground';
import P from 'prop-types';
import './styles.css';
export function ProjectsSection({ background_color, image_grid, title }) {
  const darkTheme = useTheme();
  console.log(image_grid);
  return (
    <div className={`  ${darkTheme ? 'dark' : ' '}`}>
      <SectionBackground background={background_color}>
        <div className="pb-16 dark:bg-color_header_dark">
          <div className="flex flex-col items-center text-center main-container">
            <h1 className="py-5 text-lg tracking-widest text-black uppercase dark:text-white">
              {title}
            </h1>
            <div className="grid-projects">
              {image_grid.map((el) => (
                <a
                  href={el.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 transition-all bg-white cursor-pointer shadow-normal dark:bg-gray-700 hover:shadow-hover hover:scale-105 hover:transform "
                  key={`${el.srcImg}${el.altText}`}
                >
                  <img
                    src={el.srcImg}
                    alt={el.altText}
                    className="w-full h-52"
                  />
                  <span className="px-2 pb-1 text-white bg-gray-500 rounded-b-lg">
                    {el.date}
                  </span>
                  <h1 className="text-lg tracking-widest text-black uppercase dark:text-white">
                    {el.title}
                  </h1>
                </a>
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
