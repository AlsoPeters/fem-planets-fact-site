import React, { useState } from 'react';
import classNames from 'classnames';

export default function Button({ number, name }: ButtonProps) {
  const [toggleActive, setToggleActive] = useState(false);

  const defaultStyle =
    'bg-blue-light border-2 border-blue-light flex items-center w-full h-12 leading-[11px]';

  const buttonStyle = classNames(defaultStyle, {
    'bg-black border-2 border-gray-dark flex items-center w-full h-12 leading-[11px] hover:bg-gray-dark':
      !toggleActive,
  });

  return (
    <button
      onClick={() => setToggleActive(!toggleActive)}
      className={buttonStyle}
    >
      <div className='text-gray px-8'>{number}</div>
      <div className='text-white font-bold'>{name}</div>
    </button>
  );
}

type ButtonProps = {
  number: string;
  name: string;
};
//bg-blue-light border-blue-light

//active = border-2 bg-green border-green h-12 w-[350px] flex items-center leading-[11px] font-spartan

//button style = border-2 bg-black h-12 w-[350px] flex items-center font-spartan leading-[11px]
