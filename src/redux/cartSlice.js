import {createSlice} from '@reduxjs/toolkit'
import cartItems from '../../cartitems.js'
const initialState={
    cartItems:cartItems,
    amount:4,
    total:0,
    isLoading:true
}

const cartSlice=createSlice({
    name: 'cart',
    initialState,
    reducers:{
        ClearCart:(state)=>{
            state.cartItems=[]
            state.amount=0;
        },
        removeItem:(state,action)=>{
            console.log("payload",action.payload)
            const itemId=action.payload

           state.cartItems=state.cartItems.filter((item)=>{
                   return item.id != itemId
           })
        },
        increase:(state, action) => {
            for(let i=0;i<state.cartItems.length;i++){
                 if(state.cartItems[i].id == action.payload.id){
                    state.cartItems[i].amount+=1;
                 }
            }
            state.amount+=1;
           
        },
        decrease:(state, action) => {
            for(let i=0;i<state.cartItems.length;i++){
                if(state.cartItems[i].id == action.payload.id){
                   state.cartItems[i].amount-=1;
                }
            }
            state.amount-=1;
           
        },
        totals:(state,action)=>{
            let sum=0;
            state.cartItems.forEach((item)=>{
                sum+=item.amount*item.price;
            })
            state.total=sum;
        }
    }
})

export const {ClearCart,removeItem,increase ,decrease,totals} =cartSlice.actions;
export default cartSlice.reducer