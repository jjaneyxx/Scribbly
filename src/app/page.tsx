import landingLogo from '@/assets/icons/landingLogo.svg';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-[#FAFAF8] text-2xl text-[#1A1A1A]">
      <Image src={landingLogo} alt="logo" />
      {/* todo : client component*/}
      <button>시작하기</button>
    </main>
  );
}
