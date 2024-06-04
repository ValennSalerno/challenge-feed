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
      <div className="bg-white grid grid-cols-1 lg:grid-cols-4 gap-5 p-4 min-h-screen">
          <Navbar />
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-5">
            <div>
              {children}
            </div>
          </div>
          <div className="col-span-1 pr-4 lg:pr-12 flex flex-col gap-4">
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
