import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-white py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between border px-4">
        <Link href={'/posts'}>
          <Image src="/icons/logo.svg" alt="logo" width={133} height={24} />
        </Link>
        <Link href={'/posts/create'}>
          <Image src="/icons/createButton.svg" alt="create button" width={24} height={24} />
        </Link>
      </div>
    </header>
  );
}
