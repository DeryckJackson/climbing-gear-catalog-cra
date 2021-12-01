import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'gearlist',
  initialState: {
    gearlist: [],
  },
  reducers: {
    getGear: (state, action) => {
      state.gearlist = action.payload;
    }
  }
});

export const { getGear } = counterSlice.actions;
export default counterSlice.reducer;
