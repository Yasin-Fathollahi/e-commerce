import { createClient } from '@supabase/supabase-js';
console.log('URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY);
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

async function signup(credentials) {
  return await supabase.auth.signUp(credentials);
}

async function login(credentials) {
  return await supabase.auth.signInWithPassword(credentials);
}

async function logout() {
  return await supabase.auth.signOut();
}

export { signup, login, logout };
