import {createSlice} from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products : [],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct:(state,action) => {
            state.quantity += 1;
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity
        }

    }
})
export const { addProduct } = cartSlice.actions
// to use it in store 
export default cartSlice.reducer