import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptsSearch: false,
  },
  reducers: {
    toggleShowGptSearch: (state) => {
      state.showGptsSearch = !state.showGptsSearch;
    },
  },
});

export const { toggleShowGptSearch } = gptSlice.actions;

export default gptSlice.reducer;
