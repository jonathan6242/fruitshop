import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Fruit Shop',
  description: 'The best fruits'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/a0c5c115e8.js" crossOrigin="anonymous"></script>
      </head>
      <body className={'min-h-screen flex flex-col relative ' + inter.className}>
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <footer className="flex items-center justify-center flex-wrap border-t border-slate-300 p-4 md:p-8">
          <Link href="https://www.instagram.com" target="_blank">
            <i className="fa-brands fa-instagram text-slate-700 hover:text-slate-500 cursor-pointer text-2xl sm:text-3xl md:text-4xl"></i>
          </Link>
        </footer>
        
        <div id="portal"></div>
      </body>
    </html>
  );
}
