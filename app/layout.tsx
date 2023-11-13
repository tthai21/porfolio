import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Intro from "@/components/intro";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alex Thai | Personal Portpolio",
  description: "Trong Duc Thai - Alex Thai - full-stack developer ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative h-[500px] pt-28 sm:pt-36 `}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.2rem] w-[31.2rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[35rem] h-[31.2rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-68.75] -z-10"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
