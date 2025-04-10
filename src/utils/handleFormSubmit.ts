'use server'; // server action
import { supabase } from '@/lib/supabase';

export async function handleInsertPost(formData: FormData) {
  const title = formData.get('title') as string; // FormDataEntryValue(string | File) | null
  const content = formData.get('content') as string;

  // submit form
  const { error } = await supabase.from('posts').insert({ title: title, content: content });

  if (error) {
    console.error(error.message);
  }
  // posts 로 이동..
}

// handleUpdatePost
// handleDeletePost
