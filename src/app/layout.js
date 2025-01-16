import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Adelaide Nepal Homepage",
    template: "%s | Adelaide Nepal",
  },
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="dark:bg-black"> */}
        <div className="bg:dynamicColor-bg text-dynamicColor-text">
          <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
