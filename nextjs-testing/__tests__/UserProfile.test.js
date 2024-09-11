import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from '../components/UserProfile';
import { fetchUser } from '../services/api';
import React from 'react';

jest.mock('../services/api');

test('renders user profile', async () => {
  fetchUser.mockResolvedValue({ name: 'John Doe' });
  render(<UserProfile />);

  await waitFor(() => {
    const userName = screen.getByText(/John Doe/i);
    expect(userName).toBeInTheDocument();
  });
});

test('renders error message on API error', async () => {
  fetchUser.mockRejectedValue(new Error('Network response was not ok'));
  render(<UserProfile />);

  await waitFor(() => {
    const errorMessage = screen.getByText(/Network response was not ok/i);
    expect(errorMessage).toBeInTheDocument();
  });
});

