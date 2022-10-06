import { GetServerSideProps } from 'next';
import React from 'react';
import data from '../utils/data.json';
import Image from 'next/image';

export default function mercury(props): JSX.Element {
  console.log(props);

  return (
    <div className='text-white px-6 flex flex-col items-center'>
      <div className='flex justify-center my-16'>
        <Image
          width={props.planetData.images.image_size}
          height={props.planetData.images.image_size}
          src={props.planetData.images.planet}
          alt='planet-image'
        />
      </div>

      <div className='font-antonio text-[40px]'>
        {props.planetData.name.toUpperCase()}
      </div>
      <p className='font-spartan text-gray text-sm'>
        {props.planetData.overview.content}
      </p>
      <div>
        Source:{' '}
        <a
          target='_blank'
          rel='noreferrer'
          href={props.planetData.overview.source}
        >
          Wikipedia
        </a>
      </div>
      <div className='border-gray flex justify-between items-center border-2 w-full py-2 px-4 text-sm'>
        <div className='font-spartan font-bold text-xs'>ROTATIONS TIME</div>
        <div className='font-antonio text-xl'>{props.planetData.rotation}</div>
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
      dick: 'balls',
      slug: params?.slug,
      planetData,
    },
  };
};