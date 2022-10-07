import React from 'react';
import { mobileMenuLinks } from '../utils/data';
import Link from 'next/link';
import Image from 'next/image';

export default function MobileMenu({ toggle }: MobileMenuProps): JSX.Element {
  return (
    <div className='flex flex-col items-stretch text-white z-10 bg-black  absolute w-full px-6 font-spartan'>
      <div>
        {mobileMenuLinks.map((planets, index) => {
          return (
            <div
              onClick={toggle}
              className='border-2 border-black border-b-gray-dark py-4'
              key={index}
            >
              <Link href={planets.path}>
                <div className='flex items-center justify-between' key={index}>
                  <div className='flex gap-4'>
                    <div
                      className={`w-4 h-4 ${planets.color} rounded-full`}
                    ></div>
                    <div>{planets.name}</div>
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
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface MobileMenuProps {
  toggle: () => void;
}
