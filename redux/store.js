import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import loggedInReducer from './loggedInSlice'
import pizzaListReducer from './pizzaListSlice'

export default configureStore({
  reducer: {
    cart: cartReducer,
    loggedIn: loggedInReducer,
    pizzaList: pizzaListReducer,
  },
})
