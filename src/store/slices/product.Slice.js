import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
    name: "product",
    initialState: {
        product: [],
    },
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.product.findIndex(el => el.id === action.payload.id);
            
            if (itemIndex >= 0) {
                state.product[itemIndex].quantity += 1
            }
            else state.product.push({ ...action.payload, quantity: 1 })
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.product.find((i) => i.id === itemId.id);
            if (existingItem) {
              if (existingItem.quantity === 1) {
                return state.product.filter((i) => i.id !== itemId);
              } else {
                existingItem.quantity--
              }
            }
          },
    }
})
export const { addToCart,removeFromCart } = productSlice.actions
export default productSlice.reducer