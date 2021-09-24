/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { SectionBackground } from '../SectionBackground';
import { SwitchButton } from '../SwitchButton';
import {
  ThemeProvider,
  useTheme,
  useThemeUpdate,
} from '../../providers/ThemeContext';

export function Header({ background_color, title, description }) {
  const darkTheme = useTheme();
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <SectionBackground background={background_color}>
        <div className=" dark:bg-color_header_dark">
          <div className="flex items-center justify-center h-screen text-center main-container">
            <div>
              <div className="flex justify-center text-color_button_dark">
                <FaLaptopCode size={150} />
              </div>
              <h1 className="text-4xl">{title}</h1>
              <p className="text-3xl">{description}</p>
              <SwitchButton />
            </div>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}
