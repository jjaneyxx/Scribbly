import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Scribbly',
  description: 'A simple CRUD-based bulletin board built with Next.js and Typescript',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
