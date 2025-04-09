'use client'; // 삭제

import Card from '@/components/common/Card';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();
  // test
  useEffect(() => {
    supabase.from('posts').select('*').then(console.log);
  }, []);

  const handleCardClicked = () => {
    router.push('/post/[id]');
  };

  return (
    <main>
      {/*test*/}
      <Card
        content="엄청 긴 내용이예요.😉 엄청 긴 내용이예요.😉 엄청 긴 내용이예요.😉 엄청 긴 내용이예요.😉 엄청 긴 내용이예요.😉 엄청 긴 내용이예요.😉 엄청 긴 내용이예요.😉"
        createAt="2025.04.10"
        likes={3}
        onClick={handleCardClicked}
        title="새벽입니다"
      />
      <Card
        content="엄청 긴 내용이예요.😉 엄청 긴 내용이예요.😉 엄청 긴 내용이예요.😉 엄청 긴 내용이예요.😉 엄청 긴 내용이예요.😉 엄청 긴 내용이예요.😉 엄청 긴 내용이예요.😉"
        createAt="2025.04.10"
        likes={3}
        onClick={handleCardClicked}
        title="새벽입니다"
      />
    </main>
  );
}
