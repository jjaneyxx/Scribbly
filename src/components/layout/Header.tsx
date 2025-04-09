import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-white py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <Link href={'/posts'}>
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={0}
            height={0}
            style={{ width: '133px ', height: 'auto' }}
            priority={true}
          />
        </Link>
        <Link href={'/posts/create'}>
          <Image
            src="/icons/createButton.svg"
            alt="create button"
            width={0}
            height={0}
            style={{ width: '24px', height: 'auto' }}
          />
        </Link>
      </div>
    </header>
  );
}
