'use client';

import Card from '@/components/common/Card';
import { Post } from '@/types/post';
import { useRouter } from 'next/navigation';

export default function PostCardList({ posts }: { posts: Post[] }) {
  const router = useRouter();

  const handlePostClicked = (postId: number) => {
    router.push(`/post/${postId}`);
  };
  return (
    <div>
      {posts &&
        posts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            content={post.content}
            createAt={post.created_at}
            likes={post.likes}
            onClick={() => {
              handlePostClicked(post.id);
            }}
          />
        ))}
    </div>
  );
}
