import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [headerVisible, setHeaderVisible] = useState(false);
  return (
    <header className="w-full h-[13vh] z-[100000000000000000] bg-bb text-white fixed flex flex-row justify-between items-center px-5 shadow-lg">
      <h1 className="text-3xl drop-shadow-lg">Pezza VFX</h1>
      <div></div>
      <p className="btn">
        <Link href="/">Contact &rarr;</Link>
      </p>
    </header>
  );
}

export default Header;
