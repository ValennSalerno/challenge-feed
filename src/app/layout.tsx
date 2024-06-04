import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/navbar";
import { WhoToFollow } from "./_components/who-to-follow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Challenge feed page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${inter.className} bg-white min-h-screen`}>
      <div className="bg-white grid md:grid-cols-1 lg:grid-cols-4 gap-5 p-4 min-h-screen">
          <Navbar />
          <div className="md:col-span-1 lg:col-span-2"> 
            <div>
              {children}
            </div>
          </div>
          <div className="lg:col-span-1 pr-12">
            <input
              type="text"
              placeholder="Input"
              className="mb-4 px-3 py-2 text-black bg-slate-100 rounded-full w-full"
            />
            <div className="bg-slate-100 rounded-lg py-3 pl-4">
              <h1 className="text-black text-lg font-bold">Who to follow</h1>
              <WhoToFollow />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
