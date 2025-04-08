import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

export const metadata: Metadata = {
  title: 'Scribbly',
  description: 'A simple CRUD-based bulletin board built with Next.js and Typescript',
};

/* register css variable */
const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pre',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
