// Using production URL directly to ensure it works in all environments
export const API_BASE = 'https://instagram-mlpe.onrender.com';

export async function fetchPosts() {
  const res = await fetch(`${API_BASE}/api/posts`);
  return res.json();
}

export async function createPost({ caption, imageFile }) {
  const form = new FormData();
  form.append('caption', caption || '');
  if (imageFile) form.append('image', imageFile);
  const res = await fetch(`${API_BASE}/api/posts`, { method: 'POST', body: form });
  return res.json();
}
