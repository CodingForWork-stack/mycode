import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersForSSR } from '../src/redux/slices';

const SSRPage = ({ initialUsers }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.data?.ssrUsers);

  useEffect(() => {
    // Populate the Redux store with initial data on the client side if needed
    if (!users) {
      dispatch(fetchUsersForSSR());
    }
  }, [dispatch, users]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Server-Side Rendering with Redux and Thunk</h1>
      <ul style={styles.list}>
        {(users || initialUsers)?.map((user) => (
          <li key={user.id} style={styles.listItem}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Fetch initial state on the server side
export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  let users = await response.json();

  // Sorting users by name on the server
  users = users.sort((a, b) => a.name.localeCompare(b.name));

  return {
    props: {
      initialUsers: users,
    },
  };
}

export default SSRPage;

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  },
  nav: {
marginBottom: '20px',
textAlign: 'center',
padding: '10px 0',
backgroundColor: '#0070f3', // Background color for the nav bar
borderRadius: '8px',
  },
  link: {
    color: '#fff', // White color for the link text
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    padding: '10px',
    backgroundColor: '#fff',
    marginBottom: '10px',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

