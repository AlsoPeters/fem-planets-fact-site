import React from "react";
import Image from "next/image";

export default function PlanetImage(): JSX.Element {
  return (
    <div className="m-auto py-20">
      <Image
        src="/assets/planet-mercury.svg"
        width={111}
        height={111}
        alt="mercury"
      />
    </div>
  );
}
