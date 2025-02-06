// auth.js
import { createSlice } from "@reduxjs/toolkit";

export const getUserRole = () => {
  return localStorage.getItem("role"); 
};

const initialAuthState = {
  isLoggedIn: !!localStorage.getItem("token"), 
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
      localStorage.setItem("role", role);
    },
    setFullName: (state, action) => {
      const fullName = action.payload;
      state.fullName = fullName;
      localStorage.setItem("fullName", fullName); 
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
