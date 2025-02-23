import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Product = {
  id: number;
  name: string;
};

type BasketState = {
  items: Product[];
};

const initialState: BasketState = {
  items: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = basketSlice.actions;
export default basketSlice.reducer;
