import React from 'react';

export default function InfoMenu({
  setMenu,
  selected,
  planetName,
}: InfoMenuProps): JSX.Element {
  // Tailwind does not support Dynamic Classes so i created a config to name the colors requested.
  const colorConfig: ColorConfigProps = {
    Mercury: {
      color: 'border-blue-light',
    },
    Venus: {
      color: 'border-yellow',
    },
    Earth: {
      color: 'border-purple',
    },
    Mars: {
      color: 'border-orange-200',
    },
    Jupiter: {
      color: 'border-orange-300',
    },
    Saturn: {
      color: 'border-orange-100',
    },
    Uranus: {
      color: 'border-green',
    },
    Neptune: {
      color: 'border-blue',
    },
  };

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

type ColorConfigProps = {
  [key: string]: {
    color?: string;
  };
};
