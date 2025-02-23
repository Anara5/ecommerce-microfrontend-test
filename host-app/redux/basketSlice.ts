import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BasketItem {
  id: string;
  name: string;
  quantity: number;
}

interface BasketState {
  items: BasketItem[];
  isOpen: boolean;
}

const initialState: BasketState = {
  items: [],
  isOpen: false,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<BasketItem>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    }
  },
});

export const { addItem, removeItem } = basketSlice.actions;
export default basketSlice.reducer;
