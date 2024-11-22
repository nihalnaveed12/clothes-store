import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  rating: string;
  collection: string;
};

type CartItem = Product & { quantity: number };

type CartState = {
  items: CartItem[];
  total: number;
};

const initialState: CartState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; increment: boolean }>
    ) => {
      const item = state.items.find(
        (item) => item.id.toString() === action.payload.id
      );
      if (item) {
        if (action.payload.increment) {
          item.quantity++;
          state.total += item.price;
        } else {
          if (item.quantity > 1) {
            item.quantity--;
            state.total -= item.price;
          }
        }
      } 
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id.toString() === action.payload
      );
      if (itemIndex > -1) {
        const item = state.items[itemIndex];
        state.total -= item.price * item.quantity;
        state.items.splice(itemIndex, 1);
      }
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
