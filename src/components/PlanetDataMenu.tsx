import React from 'react';
import { Props } from '../pages/[slug]';

export default function PlanetDataMenu({ planetDataMenu }: any): JSX.Element {
  const desktopStyle = `xl:h-24`;

  return (
    <div>
      <div className='flex flex-col w-full gap-2 pb-8 xl:gap-20 xl:px-20 xl:flex-row md:flex-row md:items-end lg:pb-0'>
        <div
          className={`flex items-center justify-between w-full px-4 py-2 text-sm border-2 md:flex-col md:items-start border-gray-dark ${desktopStyle}`}
        >
          <div className='text-xs font-bold font-spartan text-gray-dark'>
            ROTATIONS TIME
          </div>
          <div className='text-xl font-antonio xl:text-3xl'>
            {planetDataMenu.rotation}
          </div>
        </div>

        <div
          className={`flex items-center justify-between w-full px-4 py-2 text-sm border-2 border-gray-dark md:items-start md:flex-col ${desktopStyle}`}
        >
          <div className='text-xs font-bold font-spartan text-gray-dark'>
            REVOLUTION TIME
          </div>
          <div className='text-xl font-antonio xl:text-3xl'>
            {planetDataMenu.revolution}
          </div>
        </div>

        <div
          className={`flex items-center justify-between w-full px-4 py-2 text-sm border-2 border-gray-dark md:items-start md:flex-col ${desktopStyle}`}
        >
          <div className='text-xs font-bold font-spartan text-gray-dark'>
            RADIUS
          </div>
          <div className='text-xl font-antonio xl:text-3xl'>
            {planetDataMenu.radius}
          </div>
        </div>

        <div
          className={`flex items-center justify-between w-full px-4 py-2 text-sm border-2 border-gray-dark md:items-start md:flex-col ${desktopStyle}`}
        >
          <div className='text-xs font-bold font-spartan text-gray-dark'>
            AVERAGE TEMP.
          </div>
          <div className='text-xl font-antonio xl:text-3xl'>
            {planetDataMenu.temperature}
          </div>
        </div>
      </div>
    </div>
  );
}
