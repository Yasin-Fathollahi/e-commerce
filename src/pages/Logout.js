import { redirect } from 'react-router-dom';
import { logout as supabaseLogout } from '../supabase.js';
export function logout() {
  supabaseLogout();
  localStorage.removeItem('session');
  return redirect('/');
}
