import Header from "@/components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

// className={inter.className}

export const metadata = {
  title: "Comunidade Evangelho Simples",
  description: "A igreja começa em casa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
