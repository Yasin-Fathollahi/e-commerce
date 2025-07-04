import { redirect } from 'react-router-dom';

export function getTokenDuration() {
  const session = localStorage.getItem('session');
  if (!session) return -1;

  const expiration = new Date(
    JSON.parse(localStorage.getItem('session'))?.expires
  );

  const now = new Date();
  const duration = expiration.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = JSON.parse(localStorage.getItem('session'))?.token;
  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0 || !tokenDuration) {
    return 'EXPIRED';
  }
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) redirect('/auth');
}
