// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth';

// Load persisted state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("authState");
    if (serializedState === null) return undefined; // Return undefined if no saved state
    return JSON.parse(serializedState); // Parse and return saved state
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("authState", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

// Get initial state from localStorage
const persistedState = loadState();

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: {
    auth: persistedState ? persistedState.auth : undefined, // Load persisted state or undefined if not available
  },
});

// Subscribe to store changes to save the state to localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
