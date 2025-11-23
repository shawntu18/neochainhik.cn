import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/outfit";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeoChain 杻启元 | Industrial Supply Chain with AI",
  description: "Redefining Industrial Supply Chain with AI & 3D Digital Twins.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
