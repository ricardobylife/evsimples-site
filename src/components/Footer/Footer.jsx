import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const socials = [
    {
      label: "instagram",
      href: "https://www.instagram.com/evangelho.simples/",
    },
    {
      label: "facebook",
      href: "https://www.facebook.com/evangelhosimples.com.br/",
    },
    {
      label: "youtube",
      href: "https://www.youtube.com/c/EvangelhoSimplesOficial/videos",
    },
    {
      label: "whatsapp",
      href: "https://api.whatsapp.com/send?phone=5512992366230&text=Ol%C3%A1.%20Vim%20pelo%20site%20do%20Evangelho%20Simples.",
    },
  ];
  return (
    <div id="allFooter" className="w-full">
      <div
        className="flex items-center justify-center max-w-lg mx-auto "
        id="social"
      >
        {socials.map(({ label, href }) => (
          <div key={href}>
            <Link href={href} target="_blank">
              <Image
                src={`/icons/icon-${label}.png`}
                width={200}
                height={200}
                alt={`${label} icon`}
                className="mx-2 transition-all duration-300 ease-in-out w-14 sm:w-18 md:w-20 lg:w-24 hover:opacity-90 hover:scale-110"
              />
            </Link>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-center">
        Evangelho Simples todos os direitos reservados - 2023
      </p>
    </div>
  );
};

export default Footer;
