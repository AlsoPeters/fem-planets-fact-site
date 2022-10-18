import React from 'react';
import Image from 'next/image';
import PlanetMenu from './PlanetMenu';

export default function Nav({ toggle }: NavProps): JSX.Element {
  return (
    <div className='flex items-center justify-between px-6 py-4 border-b-2 md:justify-center md:border-none border-gray-dark'>
      <div className='xl:justify-between xl:flex xl:flex-row xl:w-full'>
        <h2 className='text-white text-3xl leading-[52px] -tracking-[1.5px] font-antonio'>
          THE PLANETS
        </h2>
        <div className='hidden xl:flex'>
          <PlanetMenu />
        </div>
      </div>
      <div className='md:hidden'>
        <button onClick={toggle}>
          <Image
            src='/assets/icon-hamburger.svg'
            width={24}
            height={17}
            alt='hambuger menu'
          />
        </button>
      </div>
    </div>
  );
}

interface NavProps {
  toggle: () => void;
}
