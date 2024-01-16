import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, name, price, img, quantity } = action.payload
            const existingItem = state.items.find(item => item.id === id)

            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.items.push({ id, name, price, img, quantity })
            }
        },
        incrementQuantity: (state, action) => {
            const { id } = action.payload
            const item = state.items.find(item => item.id === id)

            if (item) {
                item.quantity += 1
            }
        },
        decrementQuantity: (state, action) => {
            const { id } = action.payload
            const item = state.items.find(item => item.id === id)

            if (item && item.quantity > 1) {
                item.quantity -= 1
            }
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload
            state.items = state.items.filter(item => item.id !== id)
        },
        removeForCheckout: (state) =>  {
            state.items = []
        },
    },
})

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, removeForCheckout } = CartSlice.actions
export default CartSlice.reducer
