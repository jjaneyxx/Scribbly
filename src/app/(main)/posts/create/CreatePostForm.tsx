'use client';

import Button from '@/components/common/Button';
import { createPost } from '@/utils/handleFormSubmit';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function CreatePostForm() {
  const router = useRouter();

  const handleFormSubmit = async (formData: FormData) => {
    const error = await createPost(formData);

    if (error === null) {
      toast.success('글이 추가되었어요');
      router.push('/posts');
    } else {
      toast.error(`${error.code} : ${error.message}`);
    }
  };

  return (
    <form action={handleFormSubmit} className="flex flex-col">
      <div className="flex flex-col gap-3">
        <input
          name="title"
          type="text"
          placeholder="제목을 작성하세요"
          className="border bg-white px-5 py-4 text-2xl text-black"
          required
        />
        <textarea
          name="content"
          placeholder="내용을 입력하세요"
          rows={10}
          className="border bg-white px-5 py-4 text-black"
          required
        ></textarea>
      </div>
      <div className="mx-auto mt-6">
        <Button type="submit">등록하기</Button>
      </div>
    </form>
  );
}
