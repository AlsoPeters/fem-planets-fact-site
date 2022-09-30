import Image from 'next/image';
import React from 'react';
import MobileMenuItem from './MobileMenuItem';

export default function MobileMenu(): JSX.Element {
  return (
    <div className='flex flex-col items-stretch text-white bg-black  absolute w-full px-6 font-spartan'>
      <MobileMenuItem planet='MERCURY' color='bg-white' />
      <MobileMenuItem planet='VENUS' color='bg-yellow' />
      <MobileMenuItem planet='EARTH' color='bg-blue' />
      <MobileMenuItem planet='MARS' color='bg-orange-100' />
      <MobileMenuItem planet='JUPITER' color='bg-orange-200' />
      <MobileMenuItem planet='SATURN' color='bg-yellow' />
      <MobileMenuItem planet='URANUS' color='bg-green' />
      <MobileMenuItem planet='NEPTUNE' color='bg-blue-light' />
    </div>
  );
}
