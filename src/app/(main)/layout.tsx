import { ReactNode } from 'react';
import Header from '@/components/layout/Header';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col gap-[40px]">
      <Header />
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4">{children}</div>
    </div>
  );
}
