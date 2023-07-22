import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col w-full p-2">
      <div>
        <h2 className="text-3xl tracking-wide">Contribuição</h2>
        <h4 className="text-xl">Contribua com o Evangelho Simples:</h4>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full max-w-lg m-auto sm:justify-between">
        <div className="mr-2 font-sans text-base font-bold">
          <h5>Comunidade do Evangelho Simples</h5>
          <h5>Agência: 0195</h5>
          <h5>C/C: 69842-3</h5>
          <h5>CNPJ: 65.041.253/0001-59</h5>
        </div>
        <div className="mt-6 rounded-md shadow-sm shadow-slate-500">
          <Image
            width={300}
            height={300}
            src={"/images/qrcode.jpeg"}
            alt="qrcode"
            className="rounded-md w-52"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
