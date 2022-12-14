import React from "react";
import Link from "next/link";
import Image from "next/image";

import Twitter from "../../public/social-icons/Twitter.png";
import Instagram from "../../public/social-icons/Instagram.png";
import Email from "../../public/social-icons/Email.png";

function Footer() {
  var now = new Date();
  var year = now.getFullYear();
  return (
    <footer className="bg-neutral-900 text-white px-5 py-8 flex flex-col md:flex-row items-center justify-between">
      <div className="flex w-full md:w-auto justify-between md:gap-24 font-bold text-lg">
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/portfolio">PROJECTS</Link>
      </div>
      <div className="flex flex-col items-center md:items-end">
        <div className="flex flex-row gap-6">
          <a
            href="https://twitter.com/pezzavfx"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={Twitter} width={32} height={32} alt="Twitter" />
          </a>
          <a
            href="https://instagram.com/pezzavfx"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={Instagram} width={32} height={32} alt="Instagram" />
          </a>
          <a
            href="mailto:perrybriggs@pezzavfx.com"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={Email} width={32} height={32} alt="Email" />
          </a>
        </div>
        <p className="text-white/50">&copy; Pezza VFX {year}.</p>
      </div>
    </footer>
  );
}

export default Footer;
