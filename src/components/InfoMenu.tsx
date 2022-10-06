import React from 'react';

export default function InfoMenu({ setMenu, selected }: Props): JSX.Element {
  return (
    <div className='flex justify-between items-center px-6 py-4 border-b border-gray-dark font-spartan text-gray'>
      <div onClick={() => setMenu('overview')}>
        OVERVIEW
        <div className='border-2 border-blue-light translate-y-4'></div>
      </div>
      <div onClick={() => setMenu('structure')}>
        STRUCTURE
        <div className='border-2  border-blue-light translate-y-4'></div>
      </div>
      <div>
        SURFACE
        <div
          onClick={() => setMenu('surface')}
          className='border-2  border-blue-light translate-y-4'
        ></div>
      </div>
    </div>
  );
}

type Props = {
  setMenu: (menu: string) => void;
  selected: string;
};
