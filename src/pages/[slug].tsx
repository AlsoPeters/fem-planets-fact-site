import { GetServerSideProps } from 'next';
import React from 'react';
import data from '../utils/data.json';
import Image from 'next/image';

import InfoMenu from '../components/InfoMenu';
import PlanetMenu from '../components/PlanetMenu';

export default function mercury(props: Props): JSX.Element {
  console.log(props);

  const planetName = props.planetData.name;

  return (
    <div>
      {/* InfoMenu will be hidden on screen sizes md(768px) and above        */}
      <InfoMenu
        planetName={planetName}
        setMenu={props.setMenu}
        selected={props.selected}
      />
      <PlanetMenu />
      <div className='text-white gap-2 px-6 flex flex-col items-center'>
        <div className='flex justify-center items-center h-80 w-full'>
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
          <div className='hidden md:block'>
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
            />
          </div>

          {props.selectedInfoMenuItem === 'surface' ? (
            <div className='absolute translate-y-20'>
              <Image
                src={props.planetData.images.geology}
                width={163 / 2}
                height={199 / 2}
                layout='fixed'
                alt='planet-geology'
              />
            </div>
          ) : null}
        </div>

        <div className='font-antonio text-[40px]'>
          {props.planetData.name.toUpperCase()}
        </div>
        <p className='font-spartan text-center h-28 text-gray text-sm'>
          {props.selectedInfoMenuItem === 'structure'
            ? props.planetData.geology.content
            : props.selectedInfoMenuItem === 'surface'
            ? props.planetData.structure.content
            : props.planetData.overview.content}
        </p>
        <div className='mb-4'>
          Source:{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href={props.planetData.overview.source}
          >
            Wikipedia
          </a>
        </div>

        <div className='w-full flex flex-col gap-2'>
          <div className='border-gray-dark flex justify-between items-center border-2 w-full py-2 px-4 text-sm'>
            <div className='font-spartan text-gray-dark font-bold text-xs'>
              ROTATIONS TIME
            </div>
            <div className='font-antonio text-xl'>
              {props.planetData.rotation}
            </div>
          </div>

          <div className='border-gray-dark flex justify-between items-center border-2 w-full py-2 px-4 text-sm'>
            <div className='font-spartan text-gray-dark font-bold text-xs'>
              REVOLUTION TIME
            </div>
            <div className='font-antonio text-xl'>
              {props.planetData.revolution}
            </div>
          </div>

          <div className='border-gray-dark flex justify-between items-center border-2 w-full py-2 px-4 text-sm'>
            <div className='font-spartan text-gray-dark font-bold text-xs'>
              RADIUS
            </div>
            <div className='font-antonio text-xl'>
              {props.planetData.radius}
            </div>
          </div>

          <div className='border-gray-dark flex justify-between items-center border-2 w-full py-2 px-4 text-sm'>
            <div className='font-spartan text-gray-dark font-bold text-xs'>
              AVERAGE TEMP.
            </div>
            <div className='font-antonio text-xl'>
              {props.planetData.temperature}
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
