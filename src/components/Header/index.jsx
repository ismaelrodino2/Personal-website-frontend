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

export function Header() {
  const darkTheme = useTheme();
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <SectionBackground background={true}>
        <div className=" dark:bg-gray-600">
          <div className="flex items-center justify-center h-screen text-center main-container">
            <div>
              <div className="flex justify-center">
                <FaLaptopCode size={130} />
              </div>
              <h1 className="text-4xl">Ismael Rodino</h1>
              <p className="text-3xl">Front-end Dev</p>
              <SwitchButton />
            </div>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}
