import Link from "next/link";
import React, { useState } from "react";

import BasedIn from "../../public/based in.png";
import Turnarounds from "../../public/turnarounds.png";

function Header() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [dropdownVisible, setdropdownVisible] = useState(false);
  return (
    <header className="w-full h-[13vh] z-[100000000000000000] bg-bb text-white fixed flex flex-row justify-between items-center px-5 shadow-lg">
      <h1 className="text-3xl drop-shadow-lg">
        <Link href="/">Pezza VFX</Link>
      </h1>
      <img className="w-48 hidden md:block" src={BasedIn.src} />
      <div className="hidden md:flex flex-row gap-6">
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/portfolio">PORTFOLIO</Link>
      </div>
      <img className="w-48 hidden md:block" src={Turnarounds.src} />
      <p className="hidden md:block">
        <Link href="/">CONTACT &rarr;</Link>
      </p>
      {headerVisible && (
        <nav className="fixed top-[13vh] left-0 w-full z-[100000000000000] bg-bb p-6 text-xl flex gap-8 flex-col h-[87vh]">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <p className="w-full flex relative justify-between items-center">
            <Link href="/portfolio">PORTFOLIO</Link>
            <span
              className="material-symbols-outlined"
              onClick={() => setdropdownVisible(!dropdownVisible)}
            >
              {dropdownVisible ? "expand_less" : "expand_more"}
            </span>
          </p>
          {dropdownVisible && (
            <div className="ml-8">
              <Link href="/projects/motion-design">MOTION DESIGN</Link>
            </div>
          )}
        </nav>
      )}
      <p
        className="material-icons hidden-i"
        onClick={() => setHeaderVisible(!headerVisible)}
      >
        {headerVisible ? "close" : "menu"}
      </p>
    </header>
  );
}

export default Header;
