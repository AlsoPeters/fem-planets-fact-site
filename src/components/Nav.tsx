import React from 'react';
import Image from 'next/image';

export default function Nav(): JSX.Element {
  return (
    <div className='flex justify-between px-6 py-4 border-b-2 border-gray-dark bg-black items-center '>
      <h2 className='text-white text-3xl leading-[52px] -tracking-[1.5px] font-antonio'>
        THE PLANETS
      </h2>
      <div>
        <Image
          src='/assets/icon-hamburger.svg'
          width={24}
          height={17}
          alt='background stars'
        />
      </div>
    </div>
  );
}
