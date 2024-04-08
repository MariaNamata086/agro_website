import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@app/components/shared/Navbar";
import Footer from "@app/components/shared/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "",
  description: "A farming website",
  keywords:[],
  openGraph:{}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="bg-white">
          <Navbar/>
           {children}
          <Footer/>
        </div>
        </body>
    </html>
  );
}
