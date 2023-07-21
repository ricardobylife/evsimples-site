import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainNav = () => {
  const navLinks = [
    {
      label: "SÉRIES",
      href: "https://www.youtube.com/@EvangelhoSimplesOficial/playlists",
      target: "_blank",
    },
    {
      label: "PODCASTS",
      href: "https://www.youtube.com/@EvangelhoSimplesOficial/podcasts",
      target: "_blank",
    },
    {
      label: "NOSSO SONHO",
      href: "/institucional/nosso-sonho",
      target: "_self",
    },
    {
      label: "LOCALIZAÇÃO",
      href: "/localizacao",
      target: "_self",
    },
    {
      label: "CONTATO",
      href: "/contato",
      target: "_self",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col-reverse items-center justify-center h-full overflow-hidden align-middle sm:flex-row">
        <div id="linksMainNav" className="mt-2 sm:mt-0">
          <ul>
            {navLinks.map(({ href, label, target }) => (
              <li
                className="my-1 text-3xl text-center transition-all duration-[400ms] sm:text-4xl lg:text-5xl sm:text-right hover:scale-110 hover:-translate-x-2"
                key={href}
              >
                <Link href={href} target={target}>
                  {label}{" "}
                </Link>
              </li>
            ))}
            {/* <li>
              <Link
                target="_blank"
                href="https://www.youtube.com/@EvangelhoSimplesOficial/playlists"
              >
                SÉRIES
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@EvangelhoSimplesOficial/podcasts">
                PODCASTS
              </Link>
            </li>
            <li>
              <Link href="/institucional/nosso-sonho"> NOSSO SONHO</Link>
            </li>
            <li>
              <Link href="/institucional/localizacao"> LOCALIZAÇÂO</Link>
            </li>
            <li>
              <Link href="contato">CONTATO</Link>
            </li> */}
          </ul>
        </div>
        <div id="logoNav" className="w-40 sm:w-1/4 lg:w-1/3 ">
          <Image
            className="max-w-full max-h-full "
            src={"/images/logo-evsimples-white.png"}
            width={600}
            height={600}
            //   fill="responsive"
            alt="Logo da Comunidade Evangélica Evangelho Simples"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
