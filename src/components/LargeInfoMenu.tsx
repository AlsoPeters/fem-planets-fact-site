import React from 'react';

import { colorConfig } from '../lib/colorConfig';

export default function LargeInfoMenu({
  setMenu,
  selected,
  planetName,
}: InfoMenuProps): JSX.Element {
  const defaultStyle =
    'border-2 border-gray-dark flex px-4 py-2 font-spartan text-gray gap-4 ';
  const activeStyle = `border-2 gap-4 font-spartan ${colorConfig[planetName]?.color} flex px-4 py-2 text-white ${colorConfig[planetName]?.bg_color}`;

  console.log(planetName);
  console.log(colorConfig[planetName]?.color);

  return (
    <div className='flex-col w-[350px] ml-14 xl:ml-0 gap-4 hidden md:flex'>
      <div
        className={selected === 'overview' ? activeStyle : defaultStyle}
        onClick={() => setMenu('overview')}
      >
        <h2>01</h2>
        OVERVIEW
      </div>
      <div
        className={selected === 'structure' ? activeStyle : defaultStyle}
        onClick={() => setMenu('structure')}
      >
        <h2>02</h2>
        STRUCTURE
      </div>
      <div
        className={selected === 'surface' ? activeStyle : defaultStyle}
        onClick={() => setMenu('surface')}
      >
        <h2>03</h2>
        SURFACE
      </div>
    </div>
  );
}

export type InfoMenuProps = {
  setMenu: (menu: string) => void;
  selected: string;
  planetName: string;
};
