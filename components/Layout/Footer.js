import React from "react";
import Link from "next/link";
import Image from "next/image";

import Twitter from "../../public/social-icons/Twitter.png";
import Email from "../../public/social-icons/Email.png";

function Footer() {
  var now = new Date();
  var year = now.getFullYear();
  return (
    <footer className="bg-neutral-900 text-white px-5 py-8 flex flex-col md:flex-row items-center justify-between">
      <div className="flex gap-24 font-bold text-lg">
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/projects/all">PROJECTS</Link>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex flex-row gap-6">
          <a href="https://twitter.com/pezzavfx">
            <Image src={Twitter} width={32} height={32} />
          </a>
          <a href="mailto:pezzavfx@gmail.com">
            <Image src={Email} width={32} height={32} />
          </a>
        </div>
        <p className="text-white/50">&copy; Pezza VFX {year}.</p>
      </div>
    </footer>
  );
}

export default Footer;
