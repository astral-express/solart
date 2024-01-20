import type { Metadata } from "next";
import { nunito } from "./ui/fonts";
import "./globals.css";
import Starfield from "./ui/starfield";

export const metadata: Metadata = {
  title: {
    template: "Solart | %s",
    default: "Solart",
  },
  description: "Display your own world through art",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        {children}
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.01}
          backgroundColor="black"
        />
      </body>
    </html>
  );
}
