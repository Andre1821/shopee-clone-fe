import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './ProductSlice'
import CartReducer from './CartSlice'
import LoginReducer from './LoginSlice'

const Store = configureStore({
    reducer: {
        product: ProductReducer,
        cart: CartReducer,
        login: LoginReducer,
    }
})

export default Store