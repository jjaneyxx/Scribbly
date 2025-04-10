'use client';

import Button from '@/components/common/Button';
import { handleInsertPost } from '@/utils/handleFormSubmit';

export default function CreatePostForm() {
  return (
    <form action={handleInsertPost}>
      <input name="title" type="text" placeholder="제목을 작성하세요" />
      <input name="content" type="text" placeholder="내용을 작성하세요" />
      <Button type="submit">등록하기</Button>
    </form>
  );
}
