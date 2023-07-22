import React from "react";
import Link from "next/link";
import CN from "classnames";

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
  { href: "/contato", label: "CONTATO" },
];

const RightNav = ({ open }) => {
  return (
    <div
      className={CN(
        "absolute right-0 top-0  bg-slate-800 pt-14 h-screen w-52  px-3 bg-opacity-80 lg:hidden z-10 ",
        {
          "hidden ": !open,
        }
      )}
    >
      <ul>
        {navLinks.map(({ href, label }) => (
          <li className="my-4 hover:text-slate-300 " key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightNav;
