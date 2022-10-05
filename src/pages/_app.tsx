import '../styles/globals.css';
import type { AppType } from 'next/dist/shared/lib/utils';
import Nav from '../components/Nav';
import InfoMenu from '../components/InfoMenu';
import { useState } from 'react';
import MobileMenu from '../components/MobileMenu';

const MyApp: AppType = ({ Component, pageProps }) => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
    console.log('i toggled');
  }

  return (
    <div className='text-white bg-no-repeat bg-contain h-screen w-screen bg-background-stars'>
      <Nav toggle={toggleMenu} />
      {showMenu && <MobileMenu />}
      <InfoMenu />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
