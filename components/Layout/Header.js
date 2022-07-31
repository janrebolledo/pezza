import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [headerVisible, setHeaderVisible] = useState(false);
  return (
    <header className="w-full h-[13vh] z-10 bg-blue-500 flex flex-row justify-between">
      <h1>Pezza VFX</h1>
      <div></div>
      <Link href="/">Contact &rarr;</Link>
    </header>
  );
}

export default Header;
