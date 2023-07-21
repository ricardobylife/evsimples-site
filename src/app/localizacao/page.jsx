import React from "react";

import Link from "next/link";

function Map() {
  return (
    <>
      <section className="w-full h-full p-2 institutional">
        <div className="flex flex-col justify-between w-full h-full">
          <div className="mb-2">
            <h2>Localização</h2>
          </div>
          <div className="w-full h-full bg-black rounded-md border-slate-400">
            <iframe
              className="w-full h-full border-2 rounded-md border-slate-400 "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4461381280894!2d-45.55884394906372!3d-23.00738584717959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccf94967763ba3%3A0x9f232850f4726d5f!2sComunidade%20do%20Evangelho%20Simples!5e0!3m2!1spt-BR!2sbr!4v1655917991997!5m2!1spt-BR!2sbr"
            />
          </div>
          <div className="mt-2">
            <a href="https://goo.gl/maps/KSi8PmwziqSMk7NU7" target="blank">
              <p>
                Rua Dona Déa Ciambrone Girardi, 30 - São Jorge, Taubaté - SP,
                12060-721
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Map;
