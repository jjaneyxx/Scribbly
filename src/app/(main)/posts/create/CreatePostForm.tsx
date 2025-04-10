'use client';

import Button from '@/components/common/Button';
import { handleInsertPost } from '@/utils/handleFormSubmit';

export default function CreatePostForm() {
  return (
    <form action={handleInsertPost} className="flex flex-col">
      <div className="flex flex-col gap-3">
        <input
          name="title"
          type="text"
          placeholder="제목을 작성하세요"
          className="border bg-white px-5 py-4 text-2xl text-black"
        />
        <textarea
          name="content"
          placeholder="내용을 입력하세요"
          className="h-[160px] border bg-white px-5 py-4 text-black"
        />
      </div>
      <div className="mx-auto mt-6">
        <Button type="submit">등록하기</Button>
      </div>
    </form>
  );
}
