import { GetServerSideProps } from 'next';
import React from 'react';
import data from '../utils/data.json';
import Image from 'next/image';

export default function mercury(props: Props): JSX.Element {
  console.log(props);

  return (
    <div className='text-white gap-2 px-6 flex flex-col items-center'>
      <div className='flex justify-center items-center h-80 w-full'>
        <Image
          width={props.planetData.images.image_size}
          height={props.planetData.images.image_size}
          src={props.planetData.images.planet}
          layout='fixed'
          alt='planet-image'
        />
      </div>

      <div className='font-antonio text-[40px]'>
        {props.planetData.name.toUpperCase()}
      </div>
      <p className='font-spartan text-center h-28 text-gray text-sm'>
        {props.planetData.overview.content}
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
          <div className='font-antonio text-xl'>{props.planetData.radius}</div>
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

interface Props {
  slug: string;
  planetData: {
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
    };
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
  };
}
