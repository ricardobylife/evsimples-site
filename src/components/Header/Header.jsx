import React from "react";
import Link from "next/link";
import Burger from "./Burger";

function Header({ open }) {
  const navLinks = [
    {
      href: "/institucional/filosofia",
      label: "FILOSOFIA DE MINISTÉRIO",
    },
    {
      href: "/institucional/o-que-cremos",
      label: "O QUE CREMOS",
    },
    {
      href: "/institucional/nosso-sonho",
      label: "NOSSO SONHO",
    },
    {
      href: "/localizacao",
      label: "LOCALIZAÇÃO",
    },
    {
      href: "/contribuicao",
      label: "CONTRIBUIÇÃO",
    },
  ];

  return (
    <header className="flex items-center justify-between w-full mx-auto mt-2 max-w-7xl">
      <div
        id="logo"
        className="ml-2 text-3xl font-normal leading-loose tracking-wider sm:text-5xl whitespace-nowrap"
      >
        <Link href="/">EVANGELHO SIMPLES</Link>
      </div>
      <nav className="hidden ml-4 transition-all duration-500 lg:flex">
        <ul open={open} className="flex">
          {navLinks.map(({ href, label }) => (
            <li
              className="mr-4 tracking-wide transition-all duration-300 hover:text-slate-600 hover:text-opacity-80"
              key={href}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Burger />
    </header>
  );
}

export default Header;
