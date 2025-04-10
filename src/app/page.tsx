import Image from 'next/image';
import StartButton from '@/app/StartButton';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <main className="flex flex-col justify-center gap-10 p-10 text-2xl text-black">
        <Image
          src="/icons/logo.svg"
          alt="logo"
          width={0}
          height={0}
          style={{ width: '200px', height: 'auto' }}
          priority={true}
          className="mx-auto"
        />
        <StartButton />
      </main>
    </div>
  );
}
