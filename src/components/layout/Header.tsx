'use client';

import Link from 'next/link';
import Image from 'next/image';
import DropDown from '@/components/common/dropdown/index';
import { useParams, usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const params = useParams();

  const isCreatePage = pathname === '/posts/create'; // 추가
  const isPostsPage = pathname === '/posts'; // 글 목록
  const isDetailPage = Object.keys(params).length !== 0; // 상세페이지

  return (
    <header className="w-full bg-white py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        {/* logo, back button */}
        <Link href={'/posts'}>
          {isCreatePage && (
            <Image
              src="/icons/routeBack.svg"
              alt="back-logo"
              width={0}
              height={0}
              style={{ width: '32px', height: 'auto' }}
            />
          )}
          {isCreatePage || (
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={0}
              height={0}
              style={{ width: '133px ', height: 'auto' }}
              priority={true}
            />
          )}
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2">
          {isCreatePage && <span className="text-2xl font-bold">글 작성</span>}
        </div>

        {isPostsPage && (
          <Link href={'/posts/create'}>
            <Image
              src="/icons/createButton.svg"
              alt="create button"
              width={0}
              height={0}
              style={{ width: '24px', height: 'auto' }}
            />
          </Link>
        )}

        {isDetailPage && <DropDown />}
      </div>
    </header>
  );
}
