import React from 'react';
import Button from './Button';

export default function PlanetOverview(): JSX.Element {
  return (
    <div className='flex flex-col items-center px-6'>
      <div className='font-antonio text-4xl my-6'>MERCURY</div>
      <p className=' font-spartan text-center text-sm text-gray'>
        Mercury is the smallest planet in the Solar System and the closest to
        the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
        of all the Sun's planets. Mercury is one of four terrestrial planets in
        the Solar System, and is a rocky body like Earth.
      </p>
      <div className='my-6'>Source: Wikipedia</div>
      <div className='gap-2 flex flex-col'>
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
}
