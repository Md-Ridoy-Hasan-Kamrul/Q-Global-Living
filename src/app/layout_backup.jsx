import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Quiah Group - Real Estate Montreal',
  description:
    'Leading real estate company in Montreal - Buy, Rent, Sell Properties',
};

export default function RootLayout({ children }) {
  return children;
}
