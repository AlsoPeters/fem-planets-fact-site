import React from 'react';

import { colorConfig } from '../lib/colorConfig';

export default function InfoMenu({
  setMenu,
  selected,
  planetName,
}: InfoMenuProps): JSX.Element {
  const defaultStyle = 'border-2 translate-y-4 opacity-0';
  const activeStyle = `border-2 translate-y-4 ${colorConfig[planetName]?.color}`;

  console.log(planetName);
  console.log(colorConfig[planetName]?.color);

  return (
    <div className='flex justify-between items-center px-6 py-4 border-b border-gray-dark font-spartan text-gray'>
      <div onClick={() => setMenu('overview')}>
        OVERVIEW
        <div
          className={selected === 'overview' ? activeStyle : defaultStyle}
        ></div>
      </div>
      <div onClick={() => setMenu('structure')}>
        STRUCTURE
        <div
          className={selected === 'structure' ? activeStyle : defaultStyle}
        ></div>
      </div>
      <div onClick={() => setMenu('surface')}>
        SURFACE
        <div
          className={selected === 'surface' ? activeStyle : defaultStyle}
        ></div>
      </div>
    </div>
  );
}

export type InfoMenuProps = {
  setMenu: (menu: string) => void;
  selected: string;
  planetName: string;
};
