import { GetServerSideProps } from "next";
import React from "react";
import data from "../utils/data.json";
import Image from "next/image";

import InfoMenu from "../components/InfoMenu";
import PlanetMenu from "../components/PlanetMenu";
import LargeInfoMenu from "../components/LargeInfoMenu";
import PlanetDataMenu from "../components/PlanetDataMenu";

import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

export default function mercury(props: Props): JSX.Element {
  const planetName = props.planetData.name;
  const planetDataMenu = props.planetData;

  return (
    // calculate height-screen minus height of nav
    <div className="flex flex-col  h-[calc(100%_-_118px)]">
      <div className="md:hidden">
        <InfoMenu
          planetName={planetName}
          setMenu={props.setMenu}
          selected={props.selected}
        />
      </div>

      <div className="xl:hidden">
        <PlanetMenu />
      </div>
      <div className="flex flex-col items-center gap-2 px-6 text-white xl:flex-row">
        <div className="flex items-center justify-center w-full h-80 md:h-auto md:py-8 xl:py-0">
          <div className="md:hidden">
            <Image
              width={props.planetData.images.image_size}
              height={props.planetData.images.image_size}
              src={
                props.selectedInfoMenuItem === "structure"
                  ? props.planetData.images.internal
                  : props.planetData.images.planet
              }
              layout="fixed"
              alt="planet-image"
            />
          </div>
          <div className="hidden md:h-[422px] md:items-center md:flex">
            <Image
              width={props.planetData.images.image_size_lg}
              height={props.planetData.images.image_size_lg}
              src={
                props.selectedInfoMenuItem === "structure"
                  ? props.planetData.images.internal
                  : props.planetData.images.planet
              }
              layout="fixed"
              alt="planet-image"
              priority
            />
          </div>

          {props.selectedInfoMenuItem === "surface" ? (
            <div className="absolute translate-y-20">
              <div className="md:hidden">
                <Image
                  src={props.planetData.images.geology}
                  width={163 / 2}
                  height={199 / 2}
                  layout="fixed"
                  alt="planet-geology"
                />
              </div>
              <div className="absolute hidden -translate-x-20 -translate-y-16 md:block">
                <Image
                  src={props.planetData.images.geology}
                  width={163}
                  height={199}
                  layout="fixed"
                  alt="planet-geology"
                />
              </div>
            </div>
          ) : null}
        </div>
        <div className="flex flex-col xl:gap-20 gap-10 xl:pt-48 h-auto">
          <div className="flex xl:flex-col xl:items-center xl:gap-4">
            <div className="text-center md:items-start md:flex md:flex-col md:w-1/2">
              <div className="font-antonio xl:text-[80px] text-[40px]">
                {props.planetData.name.toUpperCase()}
              </div>
              <p className="text-sm text-center font-spartan md:text-left h-28 text-gray">
                {props.selectedInfoMenuItem === "structure"
                  ? props.planetData.geology.content
                  : props.selectedInfoMenuItem === "surface"
                  ? props.planetData.structure.content
                  : props.planetData.overview.content}
              </p>
              <div className="flex gap-2 justify-center text-gray">
                <p>Source:</p>
                <a
                  href={props.planetData.overview.source}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-spartan"
                >
                  <span className="flex gap-2 items-center cursor-pointer">
                    <p className="underline">Wikipedia </p>
                    <BsFillArrowUpRightSquareFill />
                  </span>
                </a>
              </div>
            </div>
            <div className="m-auto">
              <LargeInfoMenu
                planetName={planetName}
                setMenu={props.setMenu}
                selected={props.selected}
              />
            </div>
          </div>
          <div className="xl:hidden mt-auto">
            <PlanetDataMenu planetDataMenu={planetDataMenu} />
          </div>
        </div>
      </div>
      <div className="xl:flex-1"></div>
      <div className="hidden xl:block xl:mb-20">
        <PlanetDataMenu planetDataMenu={planetDataMenu} />
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
  planetDataMenu: string;
}
