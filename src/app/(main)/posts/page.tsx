'use client';

import { supabase } from '@/lib/supabase';
import { useEffect } from 'react';

export default function Page() {
  // test
  useEffect(() => {
    supabase.from('posts').select('*').then(console.log);
  }, []);
  return (
    <>
      <main>Posts</main>
    </>
  );
}
