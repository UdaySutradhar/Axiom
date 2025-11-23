import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers"; // Import the provider

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axiom Pulse",
  description: "Real-time Token Discovery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#09090b]`}>
        {/* Wrap the entire app children in the Providers */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}