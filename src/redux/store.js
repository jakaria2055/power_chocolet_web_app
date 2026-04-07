import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/useSlice";



const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
