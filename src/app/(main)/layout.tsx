import { ReactNode } from 'react';
import Header from '@/components/layout/Header';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col gap-10">
      <Header />
      <main className="mx-auto max-w-[1440px] lg:px-[190px]">{children}</main>
    </div>
  );
}
