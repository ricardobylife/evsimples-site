import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col w-full p-2">
      <div>
        <div className="text-4xl tracking-wide"> Contato</div>
        <div className="text-xl ">
          Fale conosco pelo Whatsapp oficial do Evangelho Simples:
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <div className="p-2 font-mono text-4xl text-center transition-all duration-300 border rounded-md shadow-md cursor-pointer text-slate-100 hover:bg-slate-400 bg-slate-500 border-slate-700 hover:text-slate-800 shadow-slate-500 hover:shadow-none">
          <Link
            href="https://api.whatsapp.com/send?phone=5512992366230&text=Ol%C3%A1.%20Vim%20pelo%20site%20do%20Evangelho%20Simples."
            target="_blank"
          >
            (12)99236-6230
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
