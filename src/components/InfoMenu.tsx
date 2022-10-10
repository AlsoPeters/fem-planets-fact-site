import React from 'react';

export default function InfoMenu({ setMenu, selected }: Props): JSX.Element {
  const defaultStyle = 'border-2 translate-y-4 opacity-0';
  const activeStyle = 'border-2 border-blue-light translate-y-4';

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

type Props = {
  setMenu: (menu: string) => void;
  selected: string;
};
