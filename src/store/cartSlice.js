import { createSlice } from '@reduxjs/toolkit';

const initialCartState = [];
const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: initialCartState,
  reducers: {
    addItem: (state, action) => {
      const currentIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (currentIndex === -1) {
        state.push({
          ...action.payload,
          quantity: 1,
        });
        return;
      }

      state[currentIndex].quantity++;
    },
    deleteItem: (state, action) => {
      const currentIndex = state.findIndex(
        (item) => item.id === action.payload
      );

      if (state[currentIndex].quantity === 1) {
        state.splice(currentIndex, 1);
        return;
      }

      state[currentIndex].quantity--;
    },
    clearCart: () => [],
  },
});

const actions = cartSlice.actions;
const reducer = cartSlice.reducer;

export { actions as cartActions, reducer as cartReducer };
