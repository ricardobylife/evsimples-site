import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MainNav from "@/components/MainNav/MainNav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[99.9vh]">
      <div className="flex flex-col justify-between h-full">
        <Header />
        <MainNav />
        <Footer />
      </div>
    </div>
  );
}
