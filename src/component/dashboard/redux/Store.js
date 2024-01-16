import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './ProductSlice'
import CartReducer from './CartSlice'

const Store = configureStore({
    reducer: {
        product: ProductReducer,
        cart: CartReducer,
    }
})

export default Store