import Header from "@/components/Header/Header";

import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Localização -  Evangelho Simples",
  description: "Veja aqui o endereço da nossa comunidade.",
};

export default function RootLayout({ children }) {
  return (
    <div className="h-[100svh]">
      <div className="flex flex-col justify-between h-full ">
        <div className="mb-10 ">
          <Header />
        </div>
        <section
          id="children"
          className="flex w-full h-full max-w-2xl p-2 overflow-y-auto rounded-md shadow-sm max-h-96 sm:m-auto bg-opacity-90 bg-slate-100 text-slate-700 shadow-slate-500"
        >
          {children}
        </section>
        <div className="mt-10 ">
          <Footer />
        </div>
      </div>
    </div>
  );
}
