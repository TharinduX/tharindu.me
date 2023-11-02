import supabase from './client';

export async function getLikes() {
  const { data, error } = await supabase.from('post_utils').select('likes');
  if (error) {
    throw error;
  } else {
    return data;
  }
}

export async function getViews() {
  const { data, error } = await supabase.from('post_utils').select('views');
  if (error) {
    throw error;
  } else {
    return data;
  }
}

export async function setLikes(post: any) {
  const { data, error } = await supabase.rpc('increment_likes', {
    post_id: post._id,
    increment_num: 1,
  });
  if (error) {
    throw error;
  } else {
    return data;
  }
}

export async function setViews(slugText: any) {
  const { data, error } = await supabase.rpc('inc_views', {
    slug: slugText,
  });
}
