export function getAuthToken() {
  const token = JSON.parse(localStorage.getItem('session')).token;
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}
