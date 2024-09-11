// components/ProtectedRoute.js
import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';

export default

 function ProtectedRoute({ children }) {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!session) signIn(); // Redirect to sign-in if not authenticated
  }, [session, status]);

  if (status === 'loading' || !session) {
    return <div>Loading...</div>; // Show loading state while session is being checked
  }

  return children; // Render children if authenticated
}

