import { MagazineModel } from "./../../models/MagazineModel";
import { createSlice } from "@reduxjs/toolkit";
import { BookModel } from "../../models/BookModel";

interface CartItem {
  //Properties
  product: BookModel | MagazineModel;
  quantity: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cart") || "[]") || [],
  },
  reducers: {
    addToCart: (state, action) => {
      let existingItem = state.cartItems.find(
        (i: CartItem) => i.product.id == action.payload.product.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({
          product: action.payload.product,
          quantity: 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (i: any) => i.product.id !== action.payload.product.id
      );
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    clearCart: (state, action) => {
      state.cartItems = [];
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
