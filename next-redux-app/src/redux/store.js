// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer, dataReducer } from './slices'; // Import both reducers

export const store = configureStore({
  reducer: {
    counter: counterReducer,  // Counter slice
    data: dataReducer,        // Data slice for SSR and SSG
  },
  // The middleware key should return an array of middleware functions
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // If you need to customize any middleware options, do so here
      thunk: true, // This is true by default, so it's optional to specify
    }),
});


