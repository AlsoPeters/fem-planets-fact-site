import { GetServerSideProps } from 'next';
import React from 'react';
import data from '../utils/data.json';
import Image from 'next/image';

import InfoMenu from '../components/InfoMenu';
import PlanetMenu from '../components/PlanetMenu';
import LargeInfoMenu from '../components/LargeInfoMenu';

export default function mercury(props: Props): JSX.Element {
  console.log(props);

  const planetName = props.planetData.name;

  return (
    <div>
      {/* InfoMenu will be hidden on screen sizes md(768px) and above  */}
      <div className='md:hidden'>
        <InfoMenu
          planetName={planetName}
          setMenu={props.setMenu}
          selected={props.selected}
        />
      </div>

      <div className='xl:hidden'>
        <PlanetMenu />
      </div>
      <div className='flex flex-col items-center gap-2 px-6 text-white'>
        <div className='flex items-center justify-center w-full h-80 md:h-auto md:py-8'>
          <div className='md:hidden'>
            <Image
              width={props.planetData.images.image_size}
              height={props.planetData.images.image_size}
              src={
                props.selectedInfoMenuItem === 'structure'
                  ? props.planetData.images.internal
                  : props.planetData.images.planet
              }
              layout='fixed'
              alt='planet-image'
            />
          </div>
          <div className='hidden md:h-[422px] md:items-center md:flex'>
            <Image
              width={props.planetData.images.image_size_lg}
              height={props.planetData.images.image_size_lg}
              src={
                props.selectedInfoMenuItem === 'structure'
                  ? props.planetData.images.internal
                  : props.planetData.images.planet
              }
              layout='fixed'
              alt='planet-image'
              priority
            />
          </div>

          {props.selectedInfoMenuItem === 'surface' ? (
            <div className='absolute translate-y-20'>
              <div className='md:hidden'>
                <Image
                  src={props.planetData.images.geology}
                  width={163 / 2}
                  height={199 / 2}
                  layout='fixed'
                  alt='planet-geology'
                />
              </div>
              <div className='absolute hidden -translate-x-20 -translate-y-16 md:block'>
                <Image
                  src={props.planetData.images.geology}
                  width={163}
                  height={199}
                  layout='fixed'
                  alt='planet-geology'
                />
              </div>
            </div>
          ) : null}
        </div>
        <div className='flex flex-col gap-20'>
          <div className='flex'>
            <div className='text-center md:items-start md:flex md:flex-col md:w-1/2'>
              <div className='font-antonio text-[40px]'>
                {props.planetData.name.toUpperCase()}
              </div>
              <p className='text-sm text-center font-spartan md:text-left h-28 text-gray'>
                {props.selectedInfoMenuItem === 'structure'
                  ? props.planetData.geology.content
                  : props.selectedInfoMenuItem === 'surface'
                  ? props.planetData.structure.content
                  : props.planetData.overview.content}
              </p>
              <div className=''>
                Source:{' '}
                <a
                  target='_blank'
                  rel='noreferrer'
                  href={props.planetData.overview.source}
                >
                  Wikipedia
                </a>
              </div>
            </div>
            <LargeInfoMenu
              planetName={planetName}
              setMenu={props.setMenu}
              selected={props.selected}
            />
          </div>

          <div className='flex flex-col w-full gap-2 pb-8 md:flex-row md:items-end lg:pb-0'>
            <div className='flex items-center justify-between w-full px-4 py-2 text-sm border-2 md:flex-col md:items-start border-gray-dark'>
              <div className='text-xs font-bold font-spartan text-gray-dark'>
                ROTATIONS TIME
              </div>
              <div className='text-xl font-antonio'>
                {props.planetData.rotation}
              </div>
            </div>

            <div className='flex items-center justify-between w-full px-4 py-2 text-sm border-2 border-gray-dark md:items-start md:flex-col'>
              <div className='text-xs font-bold font-spartan text-gray-dark'>
                REVOLUTION TIME
              </div>
              <div className='text-xl font-antonio'>
                {props.planetData.revolution}
              </div>
            </div>

            <div className='flex items-center justify-between w-full px-4 py-2 text-sm border-2 border-gray-dark md:items-start md:flex-col'>
              <div className='text-xs font-bold font-spartan text-gray-dark'>
                RADIUS
              </div>
              <div className='text-xl font-antonio'>
                {props.planetData.radius}
              </div>
            </div>

            <div className='flex items-center justify-between w-full px-4 py-2 text-sm border-2 border-gray-dark md:items-start md:flex-col'>
              <div className='text-xs font-bold font-spartan text-gray-dark'>
                AVERAGE TEMP.
              </div>
              <div className='text-xl font-antonio'>
                {props.planetData.temperature}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const planetData = data.find(
    (planet) => planet.name.toLowerCase() === params?.slug
  );
  console.log(planetData);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      slug: params?.slug,
      planetData,
    },
  };
};

export interface Props {
  slug: string;
  planetData: {
    color: string;
    name: string;
    overview: {
      content: string;
      source: string;
    };
    structure: {
      content: string;
      source: string;
    };
    geology: {
      content: string;
      source: string;
      image: string;
    };
    images: {
      planet: string;
      internal: string;
      geology: string;
      image_size: number;
      image_size_lg: number;
    };
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
  };
  selectedInfoMenuItem: string;
  setMenu: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
  planetName: string;
}
