'use client';

import Button from '@/components/common/Button/index';
import { useRouter } from 'next/navigation';

export default function StartButton() {
  const router = useRouter();

  const handleRouteToPost = () => {
    router.push('/posts');
  };

  return <Button onClick={handleRouteToPost}>시작하기</Button>;
}
