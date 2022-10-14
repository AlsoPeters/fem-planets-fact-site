import React from 'react';
import Image from 'next/image';

export default function Nav({ toggle }: NavProps): JSX.Element {
  return (
    <div className='flex md:justify-center md:border-none justify-between px-6 py-4 border-b-2 border-gray-dark items-center '>
      <h2 className='text-white text-3xl leading-[52px] -tracking-[1.5px] font-antonio'>
        THE PLANETS
      </h2>

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
