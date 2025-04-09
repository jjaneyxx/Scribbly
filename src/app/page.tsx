import landingLogo from '@/assets/icons/landingLogo.svg';
import Image from 'next/image';
import StartButton from '@/components/common/Button/StartButton';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <main className="flex flex-col justify-center gap-10 p-10 text-2xl text-black">
        <Image src={landingLogo} alt="logo" className="mx-auto" />
        <StartButton />
      </main>
    </div>
  );
}
