import { supabase } from '@/lib/supabase';
import PostCardList from './PostCardList';
import { Post } from '@/types/post';

export default async function Page() {
  const { error, data } = await supabase.from('posts').select('*');

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const posts: Post[] = data ?? [];

  return (
    <main>
      <PostCardList posts={posts} />
    </main>
  );
}
