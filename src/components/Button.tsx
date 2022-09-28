import React, { useState } from 'react';
import classNames from 'classnames';

export default function Button() {
  const [wasClicked, setWasClicked] = useState(false);

  const defaultStyle =
    'bg-blue-light border-2 border-blue-light flex items-center w-[350px] h-12 leading-[11px]';

  const buttonStyle = classNames(defaultStyle, {
    'bg-black border-2 border-gray-dark flex items-center w-[350px] h-12 leading-[11px] hover:bg-gray-dark':
      !wasClicked,
  });

  return (
    <button onClick={() => setWasClicked(!wasClicked)} className={buttonStyle}>
      <div className='text-gray px-8'>01</div>
      <div className='text-white font-bold'>BUTTON</div>
    </button>
  );
}
//bg-blue-light border-blue-light

//active = border-2 bg-green border-green h-12 w-[350px] flex items-center leading-[11px] font-spartan

//button style = border-2 bg-black h-12 w-[350px] flex items-center font-spartan leading-[11px]
