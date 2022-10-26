import React from "react";
import { mobileMenuLinks } from "../utils/data";
import Link from "next/link";

export default function PlanetMenu() {
  return (
    <div className="hidden border-b border-gray-dark md:block xl:border-b-0">
      <div className="flex justify-between px-8 py-8 text-sm font-spartan xl:flex xl:gap-4">
        {mobileMenuLinks.map((planets, index) => {
          return (
            <div key={index}>
              <Link href={planets.path}>{planets.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
