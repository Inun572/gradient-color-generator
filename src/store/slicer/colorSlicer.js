import { createSlice } from '@reduxjs/toolkit';
import randomColor from 'randomcolor';

const colorSlicer = createSlice({
  name: 'colors',
  initialState: [randomColor(), randomColor()],
  reducers: {
    addColor: (state) => {
      state.push(randomColor());
    },
    removeColor: (state) => {
      state.pop();
    },
    changeColor: (state, action) => (state = action.payload),
  },
});

export const { addColor, removeColor, changeColor } = colorSlicer.actions;
export default colorSlicer.reducer;
