export async function fetchUser() {
  const response = await fetch('/api/user');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

