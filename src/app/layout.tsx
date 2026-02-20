import './globals.css';
import { ReactNode } from 'react';
import { JetBrains_Mono, Kalam, Patrick_Hand } from 'next/font/google';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-kalam',
});

const patrickHand = Patrick_Hand({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-patrick-hand',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jetbrains-mono',
});

export const metadata = {
  title: 'VoxYZ Clone',
  description: 'Replica of voxyz.space using Next.js and Tailwind',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`bg-paper text-ink font-body antialiased ${kalam.variable} ${patrickHand.variable} ${jetBrainsMono.variable}`}
      >
        <SiteHeader />
        <main className="pt-24">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
