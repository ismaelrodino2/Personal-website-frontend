import { useState } from 'react';
import './styles.css';
import { BsSun, BsMoon } from 'react-icons/bs';

export function SwitchButton() {
  const [toggled, setToggled] = useState(false);
  return (
    <>
      <label className="relative inline-block h-10 w-20 ">
        <input
          className="opacity-0 w-0 h-0"
          type="checkbox"
          onChange={(event) => setToggled(event.target.checked)}
        />
        <span className="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-500 rounded-full flex items-center justify-center">
          <div className="flex">
            <div className="flex text-yellow-500 pr-3">
              <BsSun size={26} />
            </div>
            <div className="text-yellow-200">
              <BsMoon size={26} />
            </div>
          </div>
        </span>
      </label>
      <p>{toggled ? 'on' : 'off'}</p>
    </>
  );
}
