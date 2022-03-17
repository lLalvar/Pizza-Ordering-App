import { createSlice } from '@reduxjs/toolkit'

const loggedInSlice = createSlice({
  name: 'loggedIn',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = action.payload
    },
  },
})

export const { login } = loggedInSlice.actions

export default loggedInSlice.reducer
