import { useTheme } from '../../providers/ThemeContext';
import { SectionBackground } from '../SectionBackground';
import P from 'prop-types';

export function ProjectsSection({ background_color, image_grid, title }) {
  const darkTheme = useTheme();
  console.log(image_grid);
  return (
    <div className={`  ${darkTheme ? 'dark' : ' '}`}>
      <SectionBackground background={background_color}>
        <div className="pb-6 dark:bg-color_header_dark">
          <div className="flex flex-col items-center text-center main-container">
            <h1 className="pt-5 text-lg tracking-widest text-black uppercase">
              {title}
            </h1>
            <div className="flex flex-col flex-wrap items-center justify-center w-full gap-3 md:flex-row">
              {image_grid.map((el) => (
                <div
                  className="flex-row p-3 my-5 bg-white shadow-normal md:w-1/2 lg:w-1/3 dark:bg-gray-700"
                  key={`${el.srcImg}${el.altText}`}
                >
                  <img src={el.srcImg} alt={el.altText} />
                  <span className="px-2 pb-1 text-white bg-gray-500 rounded-b-lg ">
                    {el.date}
                  </span>
                  <h1 className="text-lg tracking-widest text-black uppercase">
                    {el.title}
                  </h1>
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
