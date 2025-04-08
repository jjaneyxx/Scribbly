import landingLogo from '@/assets/icons/landingLogo.svg';
import Image from 'next/image';
import Button from '@/components/Button';

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-white text-2xl text-black">
      <Image src={landingLogo} alt="logo" />
      <Button>시작하기</Button>
    </main>
  );
}
