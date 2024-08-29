import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer, Sidebar } from "~/components/bars";
import { Sheet } from "~/components/ui/sheet";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inside Out | The utlimate tea junction",
  description:
    "The ultimate tea junction for all types of tea lovers depending on their mood.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${inter.className}`}>
        <Sheet>
          <Sidebar />
          <Navbar />
          <main className="bg-green-50">{children}</main>
          <Footer />
        </Sheet>
      </body>
    </html>
  );
}
