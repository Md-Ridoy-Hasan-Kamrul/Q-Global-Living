import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata = {
  title: "Quiah Group - Real Estate Montreal",
  description:
    'Leading real estate company in Montreal - Buy, Rent, Sell Properties',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} notranslate`} translate="no">
      <head>
        <meta name="google" content="notranslate" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-background-light text-charcoal dark:bg-background-dark dark:text-soft-grey">
        {children}
      </body>
    </html>
  );
}
