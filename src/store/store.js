// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import packageReducer from "./packageSlice";

const store = configureStore({
  reducer: {
    packages: packageReducer, // Add packageReducer here
  },
});

export default store;
