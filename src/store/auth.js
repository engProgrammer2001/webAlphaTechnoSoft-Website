// auth.js
import { createSlice } from "@reduxjs/toolkit";

export const getUserRole = () => {
  // Replace this with actual logic to get user role from authentication state or storage
  return localStorage.getItem("role"); // Example: "admin" or "user"
};

const initialAuthState = {
  isLoggedIn: !!localStorage.getItem("token"), // Cleaner way to check for truthiness
  id: localStorage.getItem("id") || "",
  role: localStorage.getItem("role") || "user",
  fullName: localStorage.getItem("fullName") || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      state.id = localStorage.getItem("id") || "";
      state.role = localStorage.getItem("role") || "user";
      state.fullName = localStorage.getItem("fullName") || "";
      // If you have more login-specific state updates, add them here
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.role = "user";
      state.fullName = "";
      state.id = "";

      // Clear localStorage items related to authentication
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("fullName");
      localStorage.removeItem("id");
    },
    changeRole: (state, action) => {
      const role = action.payload;
      state.role = role;
      localStorage.setItem("role", role); // Ensure localStorage is updated
    },
    setFullName: (state, action) => {
      const fullName = action.payload;
      state.fullName = fullName;
      localStorage.setItem("fullName", fullName); // Ensure localStorage is updated
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
