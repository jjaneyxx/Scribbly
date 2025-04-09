import Image from 'next/image';
import StartButton from '@/components/common/Button/StartButton';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <main className="flex flex-col justify-center gap-10 p-10 text-2xl text-black">
        <Image src="/icons/logo.svg" alt="logo" className="mx-auto" width={200} height={38} />
        <StartButton />
      </main>
    </div>
  );
}
