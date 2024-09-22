import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export const metadata: Metadata = {
  title: "Yummly",
  description: "Discover new recipes everyday",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <main className="lg:flex">
          <div className="lg:hidden">
            <Navbar />
          </div>

          <section className="hidden lg:block">
            <Sidebar />
          </section>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
