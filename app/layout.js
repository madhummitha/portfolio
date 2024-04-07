import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Madhummitha R",
  description: "My Portfolio",
  keyword: ["portfolio", "nextJs"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
