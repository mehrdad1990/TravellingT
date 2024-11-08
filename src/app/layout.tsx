import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import {Providers} from '@/redux/Provider.redux'
import { Toaster } from "@/components/ui/sonner"
 

export const metadata: Metadata = {
  title: "Travel Thrills - Explore the world with us",
  description: "Travel thrills is a tour agency which provides top notch tour packages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Providers >
        <Toaster />
        <Header/>
        {children}
        <Footer/>
        
        </Providers>
        </body>
    </html>
  );
}
