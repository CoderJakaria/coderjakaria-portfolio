import { createSlice } from "@reduxjs/toolkit";

const infoReducer = createSlice({
  name: "INFOS",
  initialState: {
    infos: null,
  },
  reducers: {
    get__info: (state, action) => {
      state.infos = action.payload;
    },
  },
});

export const { get__info } = infoReducer.actions;
export default infoReducer.reducer;
