import React from 'react';
import Image from 'next/image';

export default function MobileMenuItem({ planet, color }): JSX.Element {
  return (
    <div className='flex items-center justify-between border-2 border-black py-4 border-b-gray-dark'>
      <div className='flex gap-4'>
        <div className={`h-4 w-4 rounded-full ${color}`}></div>
        <div>{planet}</div>
      </div>
      <div>
        <Image
          src='/assets/icon-chevron.svg'
          width={4}
          height={8}
          alt='chevron'
        />
      </div>
    </div>
  );
}
