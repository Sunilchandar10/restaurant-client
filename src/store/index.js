import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // Add other slices here
  },
  // Adding middleware is easy with Redux Toolkit
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),
});

export default store;
