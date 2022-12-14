import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Nav from "../components/Nav";
import { useState } from "react";
import MobileMenu from "../components/MobileMenu";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [infoMenuSelection, setInfoMenuSelection] = useState("overview");

  function toggleMenu(): void {
    setShowMenu(!showMenu);
    console.log("i toggled the mobile menu");
  }

  return (
    <div className="text-white bg-no-repeat bg-contain h-screen w-screen bg-background-stars">
      <Nav toggle={toggleMenu} />
      {showMenu && <MobileMenu toggle={toggleMenu} />}
      <Component
        setMenu={setInfoMenuSelection}
        selected={infoMenuSelection}
        selectedInfoMenuItem={infoMenuSelection}
        {...pageProps}
      />
    </div>
  );
};

export default MyApp;
