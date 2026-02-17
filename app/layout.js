import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Fahad - Portfolio",
  description: "Portfolio showcasing my projects and experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} font-poppins antialiased min-h-screen bg-white dark:bg-black text-black dark:text-white`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
