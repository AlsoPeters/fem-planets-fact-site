import React from 'react';
import { mobileMenuLinks } from '../utils/data';

export default function PlanetMenu() {
  return (
    <div className='border-b border-gray-dark hidden md:block'>
      <div className='flex justify-between px-8 font-spartan text-sm py-8'>
        {mobileMenuLinks.map((planets, index) => {
          return <div key={index}>{planets.name}</div>;
        })}
      </div>
    </div>
  );
}
