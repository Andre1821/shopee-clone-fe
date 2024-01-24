import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userLogin : {
        username:"",
        token:"",
        role:"",
    }
}

const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        add: (state, action) => {
            state.userLogin.username = action.payload
            state.userLogin.token = action.payload
            state.userLogin.role = action.payload
        },
        remove: (state) => {
            state.userLogin = {}
        }
    }
})

export const {add, remove} = LoginSlice.actions
export default LoginSlice.reducer