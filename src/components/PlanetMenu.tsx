import React from 'react';
import { mobileMenuLinks } from '../utils/data';
import Link from 'next/link';

export default function PlanetMenu() {
  return (
    <div className='border-b border-gray-dark hidden md:block'>
      <div className='flex justify-between px-8 font-spartan text-sm py-8'>
        {mobileMenuLinks.map((planets, index) => {
          return (
            <div key={index}>
              <Link href={planets.path}>{planets.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
