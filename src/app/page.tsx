import landingLogo from '@/assets/icons/landingLogo.svg';
import Image from 'next/image';
import Button from '@/components/common/button/Button';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <main className="flex flex-col justify-center gap-10 p-10 text-2xl text-black">
        <Image src={landingLogo} alt="logo" className="mx-auto" />
        <Button>시작하기</Button>
      </main>
    </div>
  );
}
