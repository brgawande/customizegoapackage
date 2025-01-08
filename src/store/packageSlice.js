import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  profit: 0,
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
    setProfit: (state, action) => {
      state.profit = action.payload; // Update the profit
    },
    setSelectedPackages: (state, action) => {
      state.selectedPackages = action.payload; // Update the selected packages
    },
    setQuantities: (state, action) => {
      state.quantities = action.payload; // Update the quantities
    },
  },
});

export const { setTotal, setProfit, setSelectedPackages, setQuantities } =
  packageSlice.actions;
export default packageSlice.reducer;
