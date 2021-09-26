import { SectionBackground } from '../SectionBackground';
import { DiReact } from 'react-icons/di';
import { SiNextDotJs } from 'react-icons/si';
import { useTheme } from '../../providers/ThemeContext';
import P from 'prop-types';

export default function AboutSection({
  background_color,
  title,
  description,
  image,
  icons_about,
}) {
  const darkTheme = useTheme();
  return (
    <div className={`  ${darkTheme ? 'dark' : ' '}`}>
      <SectionBackground background={background_color}>
        <div className="pb-12 md:pb-20 dark:bg-color_sections_gray">
          <div className="main-container ">
            <h1 className="flex justify-center pt-4 text-lg tracking-widest text-black uppercase md:pt-16 pb-14 dark:text-white">
              {title}
            </h1>
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <div className="w-64 p-3 border-gray-900 rounded shadow-normal dark:bg-color_cardbg-color_sections_dark dark:bg-color_cards_dark">
                <div className="flex ">
                  <img
                    src={image.url}
                    alt={image.altText}
                    className="inline-flex w-full h-72"
                  />
                </div>
                <div className="flex justify-center gap-2 pt-3">
                  {icons_about.map((el, index) => (
                    <div
                      key={index}
                      className="text-4xl"
                      dangerouslySetInnerHTML={{ __html: el.svg }}
                    />
                  ))}
                </div>
              </div>
              <div className="pt-5 md:w-3/5">
                <div className="flex items-center bg-gray-100 border border-gray-300 rounded-t dark:color_gray_dark dark:bg-gray-700 h-7">
                  <div className="w-3 h-3 mx-1 ml-3 bg-red-600 rounded-full" />
                  <div className="w-3 h-3 mx-1 rounded-full bg-color_yellow" />
                  <div className="w-3 h-3 mx-1 bg-green-500 rounded-full" />
                </div>
                <div
                  className="p-3 border border-t-0 border-gray-300 rounded-b dark:color_gray_dark dark:border-gray-300 dark:text-white"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
            </div>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}
AboutSection.propTypes = {
  background_color: P.string,
  title: P.string,
  description: P.string,
  image: P.object,
  icons_about: P.array,
};
