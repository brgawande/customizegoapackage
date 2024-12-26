// store/packageSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  selectedPackages: [],
  quantities: {},
};

const packageSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {
    setTotal: (state, action) => {
      state.total = action.payload; // Update the total
    },
    setSelectedPackages: (state, action) => {
      state.selectedPackages = action.payload; // Update the selected packages
    },
    setQuantities: (state, action) => {
      state.quantities = action.payload; // Update the quantities
    },
  },
});

export const { setTotal, setSelectedPackages, setQuantities } =
  packageSlice.actions;
export default packageSlice.reducer;
