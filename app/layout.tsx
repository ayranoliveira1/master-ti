import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Master.TI",
   description: "Generated by create next app",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="pt-BR">
         <body className={inter.className}>
            <div className="flex-1">{children}</div>
            <Footer />
         </body>
      </html>
   );
}
