import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavComponent from "./components/NavComponent/NavComponent";
import Sidenavbar from "./components/SideNavbar/SideNavbar";
import { Poppins } from "next/font/google"; 


const poppins = Poppins({
  weight: ["400", "600", "700"], 
  subsets: ["latin"],
  variable: "--font-poppins", 
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${poppins.variable} antialiased`}>
        <NavComponent />
        <div className="flex min-h-screen">
          <Sidenavbar/>
          <main className="flex-1 lg:p-6 p-2 ">{children}</main>
        </div>
      </body>
    </html>
  );
}
