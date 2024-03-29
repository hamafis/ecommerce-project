import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ecommerce Project',
  // icons: '',
  authors: { name:'hamafis' },
  description: "Nothing for description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
