import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
    products: [
        {
            id: 1,
            name: 'Lunar Ice Cream Strawberry',
            price: 120000,
            img: './images/lunar.jpeg',
            description: 'Liquid enak banget'
        },
        {
            id: 2,
            name: 'Happy Krunch Strawberry',
            price: 110000,
            img: './images/hp-stawberry.jpeg',
            description: 'Liquid enak banget'
        },
        {
            id: 3,
            name: 'Lunar Ice Cream Vanilla',
            price: 120000,
            img: './images/lunar-vanila.jpeg',
            description: 'Liquid enak banget'
        },
        {
            id: 4,
            name: 'Pulse AIO Pro',
            price: 650000,
            img: './images/pulse.jpeg',
            description: 'AIO klik joos'
        },
        {
            id: 5,
            name: 'Centaurus M100',
            price: 450000,
            img: './images/m100.jpeg',
            description: 'Mod mungil single baterai'
        },
        {
            id: 6,
            name: 'Hex Ohm',
            price: 3450000,
            img: './images/hexohm.jpeg',
            description: 'Mod Sultan'
        },
        {
            id: 7,
            name: 'Happy Krunch Milo',
            price: 110000,
            img: './images/hp-milo.jpeg',
            description: 'Liquid enak banget'
        },
        {
            id: 8,
            name: 'Lunar Ice Cream Vanilla',
            price: 130000,
            img: './images/lunar-vanila.jpeg',
            description: 'Liquid enak banget'
        }
    ]
}

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {}
})

export const {} = ProductSlice.actions
export default ProductSlice.reducer