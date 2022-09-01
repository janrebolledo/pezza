import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

import BasedIn from "../../public/based in.png";
import Turnarounds from "../../public/turnarounds.png";

const dropdownLinks = [
  { name: "Video Editing", href: "/projects/video-editing" },
  { name: "Videography", href: "/projects/videography" },
  { name: "Motion Graphics", href: "/projects/motion-graphics" },
  { name: "Photography", href: "/projects/photography" },
  {
    name: "Social Media Management",
    href: "/projects/social-media-management",
  },
];

function Header() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [dropdownVisible, setdropdownVisible] = useState(false);

  const { asPath } = useRouter();
  return (
    <header className="w-full h-[13vh] z-[100000000000000000] bg-bb text-white font-bold fixed flex flex-row justify-between items-center px-5 shadow-lg xl:text-xl">
      <h1
        className="text-4xl font-normal"
        onClick={() => setHeaderVisible(false)}
      >
        <Link href="/">Pezza VFX</Link>
      </h1>
      <img
        className="w-48 hidden md:block"
        src={BasedIn.src}
        alt="Based in Brisbane &amp; Gold Coast"
      />
      <div className="hidden md:flex flex-row gap-6 headerlinks h-full items-center">
        <Link href="/">
          <p
            className={
              asPath === "/"
                ? "underline underline-offset-4 text-bb-lighter hover:text-white transition-all"
                : "hover:text-bb-lighter transition-all"
            }
          >
            HOME
          </p>
        </Link>
        <Link href="/about">
          <p
            className={
              asPath === "/about"
                ? "underline underline-offset-4 text-bb-lighter hover:text-white transition-all"
                : "hover:text-bb-lighter transition-all"
            }
          >
            ABOUT
          </p>
        </Link>
        <div
          className="relative h-full flex items-center"
          onMouseOver={() => setdropdownVisible(true)}
          onMouseOut={() => setdropdownVisible(false)}
        >
          <p className="flex items-center gap-2 cursor-pointer">
            <Link href="/portfolio">
              <span
                className={
                  asPath.includes("projects") || asPath.includes("portfolio")
                    ? `underline underline-offset-4 text-bb-lighter hover:text-white transition-all`
                    : "hover:text-bb-lighter transition-all"
                }
              >
                PORTFOLIO
              </span>
            </Link>

            <span
              className="material-icons"
              onClick={() => setdropdownVisible(!dropdownVisible)}
            >
              {dropdownVisible ? "expand_less" : "expand_more"}
            </span>
          </p>
          {dropdownVisible && (
            <div
              className="absolute uppercase flex flex-col top-[13vh] left-[-1.5rem] p-6 bgradient gap-6 w-max headerdropdown"
              onClick={() => setdropdownVisible(false)}
            >
              {dropdownLinks.map((link, index) => (
                <p
                  className={
                    asPath === link.href
                      ? "underline underline-offset-4 text-bb-lighter hover:text-white transition-all"
                      : "hover:text-bb-lighter transition-all"
                  }
                  key={index}
                >
                  <Link href={link.href}>{link.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <img
        className="w-48 hidden md:block"
        src={Turnarounds.src}
        alt="Same Day Turnarounds"
      />
      <p className="hidden md:block">
        <Link href="/contact">CONTACT &rarr;</Link>
      </p>
      {headerVisible && (
        <nav className="fixed top-[13vh] left-0 w-full z-[100000000000000] bg-bb p-6 text-xl flex gap-8 flex-col h-[87vh]">
          <p
            className="w-full"
            onClick={() => setHeaderVisible(!headerVisible)}
          >
            <Link href="/">HOME</Link>
          </p>
          <p
            className="w-full"
            onClick={() => setHeaderVisible(!headerVisible)}
          >
            <Link href="/about">ABOUT</Link>
          </p>
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
            <div
              className="ml-8 flex uppercase flex-col gap-8 overflow-y-auto"
              onClick={() => setHeaderVisible(!headerVisible)}
            >
              {dropdownLinks.map((link, index) => (
                <Link href={link.href} key={index}>
                  {link.name}
                </Link>
              ))}
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
