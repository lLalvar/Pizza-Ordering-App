import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload)
      state.quantity += 1
      state.total += action.payload[1].price * action.payload[1].quantity
    },
    resetProduct: (state, action) => {
      state.products = []
    },
  },
})

export const { addProduct, reset } = cartSlice.actions

export default cartSlice.reducer
