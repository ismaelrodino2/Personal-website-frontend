/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { SectionBackground } from '../SectionBackground';
import { SwitchButton } from '../SwitchButton';
import { useTheme, useThemeUpdate } from '../../providers/ThemeContext';

export function Header({ children }) {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  console.log(darkTheme);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <SectionBackground background={true}>
        <div className="h-screen flex items-center justify-center">
          <div className="">
            <FaLaptopCode />
            <h1>Ismael</h1>
            <p>dev</p>
            <button onClick={toggleTheme}>tema dark</button>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}
