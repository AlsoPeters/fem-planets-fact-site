import '../styles/globals.css';
import type { AppType } from 'next/dist/shared/lib/utils';
import Nav from '../components/Nav';
import InfoMenu from '../components/InfoMenu';
import MobileMenu from '../components/MobileMenu';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Nav />
      {/* <MobileMenu /> */}
      <InfoMenu />
      <Component {...pageProps} />;
    </>
  );
};

export default MyApp;
