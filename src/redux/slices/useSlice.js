import { createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios.js";
import toast from "react-hot-toast";

// Initial State
const initialState = {
  user: null,            // Stores logged-in user data
  loading: false,        // Tracks API request status
  error: null,           // Stores error messages
  isAuthenticated: false // Tracks authentication status
};

// Slice Definition
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Set loading state (true/false)
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    // Set user data and authentication status
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload; // true if user exists, false if null
      state.error = null; // clear error when user is successfully set
    },

    // Set error message and reset authentication
    setError: (state, action) => {
      state.error = action.payload;
      state.isAuthenticated = false;
    },

    // Clear user data on logout
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
});

// Export actions
export const { setLoading, setUser, setError, logout } = userSlice.actions;
// Export reducer
export default userSlice.reducer;




// ==============================
// Async Thunks (API Calls)
// ==============================

// Register new user
export const registerUser = (userData, navigate) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axiosInstance.post("/user/register", userData);
    if (data?.success) {
      dispatch(setUser(data?.user));
      toast.success(data.message || "Register success.");
      navigate("/");
    }
  } catch (error) {
    dispatch(setError(error?.response?.data?.message || "Register Failed"));
    // toast.error(error?.response?.data?.message || "Register Failed");
  } finally {
    dispatch(setLoading(false));
  }
};

// Login user
export const loginUser = (userData, navigate) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axiosInstance.post("/user/login", userData);
    if (data?.success) {
      dispatch(setUser(data?.user));
      toast.success(data.message || "Login success.");
      navigate("/");
    }
  } catch (error) {
    dispatch(setError(error?.response?.data?.message || "Login Failed"));
    // toast.error(error?.response?.data?.message || "Login Failed");
  } finally {
    dispatch(setLoading(false));
  }
};



// Logout user
export const logoutUser = (navigate) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axiosInstance.get("/user/logout");
    if (data?.success) {
      dispatch(logout());
      toast.success(data.message || "Logout success.");
      navigate("/");
    }
  } catch (error) {
    dispatch(setError(error?.response?.data?.message || "Logout Failed"));
    toast.error(error?.response?.data?.message || "Logout Failed");
  } finally {
    dispatch(setLoading(false));
  }
};






