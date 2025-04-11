'use server'; // server action
import { supabase } from '@/lib/supabase';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string; // FormDataEntryValue(string | File) | null
  const content = formData.get('content') as string;

  // submit form
  const { error, data } = await supabase
    .from('posts')
    .insert({ title: title, content: content })
    .select();

  if (error) {
    console.error(error.message);
    return;
  }

  return data;
}

// updatePost
// deletePost
