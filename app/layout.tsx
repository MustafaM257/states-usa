import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import "@/styles/global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTop";
const inter = Inter({ subsets: ["latin"] });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "USA states info",
  description: "This is a simple app to show information about USA states",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceCodePro.className}>
        <Header />
        <div className="max-w-7xl w-full  px-4 mx-auto py-10 r">{children}</div>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
