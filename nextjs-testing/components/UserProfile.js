import React, { useState, useEffect } from 'react';
import { fetchUser } from '../services/api';

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser()
      .then(data => setUser(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div>{error}</div>;
  if (!user) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}

