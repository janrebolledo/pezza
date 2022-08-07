import Link from "next/link";
import React, { useState } from "react";

import BasedIn from "../../public/based in.png";
import Turnarounds from "../../public/turnarounds.png";

function Header() {
  const [headerVisible, setHeaderVisible] = useState(false);
  return (
    <header className="w-full h-[13vh] z-[100000000000000000] bg-bb text-white fixed flex flex-row justify-between items-center px-5 shadow-lg">
      <h1 className="text-3xl drop-shadow-lg">Pezza VFX</h1>
      <img className="w-48" src={BasedIn.src} />
      <div className="flex flex-row gap-6">
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/portfolio">PORTFOLIO</Link>
      </div>
      <img className="w-48" src={Turnarounds.src} />
      <Link href="/">CONTACT &rarr;</Link>
    </header>
  );
}

export default Header;
