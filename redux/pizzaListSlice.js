import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1',
    title: 'Pizza Pepperoni',
    desc: 'the best Pepperoni pizza',
    img: '/img/pizza.png',
    prices: [10, 12, 14],
    extraOptions: [
      {
        id: '1',
        text: 'souse',
        price: 2,
      },
    ],
  },
  {
    id: '2',
    title: 'Pizza Pollo',
    desc: 'the best Pollo pizza',
    img: '/img/pizza.png',
    prices: [7, 8, 9],
    extraOptions: [
      {
        id: '1',
        text: 'garlic',
        price: 3,
      },
      {
        id: '2',
        text: 'hot',
        price: 1,
      },
    ],
  },
]

const pizzaListSlice = createSlice({
  name: 'pizzaList',
  initialState,
  reducers: {
    addPizza: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const { addPizza } = pizzaListSlice.actions

export default pizzaListSlice.reducer
