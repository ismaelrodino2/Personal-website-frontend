import { useState } from 'react';
import './styles.css';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme, useThemeUpdate } from '../../providers/ThemeContext';
import { Header } from '../Header';

export function SwitchButton() {
  const toggleTheme = useThemeUpdate();
  const darkTheme = useTheme();
  console.log(darkTheme);
  return (
    <>
      <label className="relative inline-block w-20 h-10 ">
        <input
          className="w-0 h-0 opacity-0"
          type="checkbox"
          onChange={toggleTheme}
        />
        <span className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-gray-500 rounded-full cursor-pointer slider">
          <div className="flex">
            <div className="flex pr-3 text-yellow-500">
              <BsSun size={26} />
            </div>
            <div className="text-yellow-200">
              <BsMoon size={26} />
            </div>
          </div>
        </span>
      </label>
    </>
  );
}
