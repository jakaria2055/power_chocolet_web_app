import { createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios.js";
import toast from "react-hot-toast";

// Load from localStorage
const savedToken = localStorage.getItem("token");
const savedUser = localStorage.getItem("user");

// Initial State
const initialState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  token: savedToken || null,
  registerData: null, // OTP + email store 
  loading: false,
  error: null,
  isAuthenticated: !!savedToken,
};

// Slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload.user || action.payload;
      state.token = action.payload.token || state.token || null;
      state.isAuthenticated = true;
      state.error = null;

      localStorage.setItem(
        "user",
        JSON.stringify(action.payload.user || action.payload)
      );

      if (action.payload.token) {
        localStorage.setItem("token", action.payload.token);
      }
    },

    setRegisterData: (state, action) => {
      state.registerData = action.payload;
    },

    clearRegisterData: (state) => {
      state.registerData = null;
    },

    setError: (state, action) => {
      state.error = action.payload;
      state.isAuthenticated = false;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.registerData = null;
      state.isAuthenticated = false;
      state.error = null;

      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const {
  setLoading,
  setUser,
  setError,
  logout,
  setRegisterData,
  clearRegisterData,
} = userSlice.actions;

export default userSlice.reducer;

// ==============================
// Async Thunks
// ==============================

// Register new user
export const registerUser = (userData) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const formData = new FormData();
    formData.append("first_name", userData.first_name);
    formData.append("last_name", userData.last_name);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("password_confirmation", userData.password_confirmation);
    formData.append("terms", userData.terms ? "true" : "false");

    const { data } = await axiosInstance.post("/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (data?.status === 201) {
      dispatch(setRegisterData(data?.data));
      toast.success(data?.message || "Registered successfully.");
      return { success: true, data: data?.data };
    }
  } catch (error) {
    const message = error?.response?.data?.message || "Register Failed";
    dispatch(setError(message));
    toast.error(message);
    return { success: false };
  } finally {
    dispatch(setLoading(false));
  }
};

// Verify OTP
export const verifyOtp = (otpData) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const formData = new FormData();
    formData.append("email", otpData.email);
    formData.append("otp", otpData.otp);

    const { data } = await axiosInstance.post("/verify_otp", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    toast.success(data?.message || "OTP Verified Successfully");
    dispatch(clearRegisterData());

    return { success: true, data };
  } catch (error) {
    const message = error?.response?.data?.message || "OTP Verification Failed";
    dispatch(setError(message));
    toast.error(message);
    return { success: false };
  } finally {
    dispatch(setLoading(false));
  }
};

// Login user
export const loginUser = (userData, navigate) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const formData = new FormData();

    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("remember_me", userData.remember_me ? "true" : "false");

    const { data } = await axiosInstance.post("/login", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (data?.status === true) {
      dispatch(
        setUser({
          user: data?.data,
          token: data?.token,
        })
      );

      toast.success(data?.message || "Login successful.");
      navigate("/");
    }
  } catch (error) {
    const message = error?.response?.data?.message || "Login Failed";
    dispatch(setError(message));
    toast.error(message);
  } finally {
    dispatch(setLoading(false));
  }
};

// Logout user
export const logoutUser = (navigate) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    dispatch(logout());
    toast.success("Logout success.");
    navigate("/");
  } catch (error) {
    console.log(error);
    dispatch(setError("Logout Failed"));
    toast.error("Logout Failed");
  } finally {
    dispatch(setLoading(false));
  }
};