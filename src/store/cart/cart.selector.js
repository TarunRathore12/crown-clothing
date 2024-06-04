import { createSelector } from "reselect";

const cartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [cartReducer],
  (cartSlice) => cartSlice.isCartOpen
);

export const selectCartItems = createSelector(
  [cartReducer],
  (cartSlice) => cartSlice.cartItems
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (selectCartItems) => selectCartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (selectCartItems) => selectCartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
