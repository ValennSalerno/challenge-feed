import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/navbar";
import { WhoToFollow } from "./_components/who-to-follow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-4 gap-1 p-16">
          <Navbar />
          <div className="col-span-2">{children}</div>
          <div className="px-6">
            <h1 className="font-bold">Who to follow</h1>
            <WhoToFollow />
          </div>
        </div>
      </body>
    </html>
  );
}
