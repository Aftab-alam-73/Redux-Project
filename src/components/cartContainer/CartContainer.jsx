import { useSelector,useDispatch } from "react-redux"
import CartItem from "../cartitem/CartItem"
import style from './cartcon.module.css'
import { totals} from "../../redux/cartSlice"
import { useEffect } from "react"
import { openModel } from "../../redux/modelSlice"


const CartContainer = () => {
  const {cartItems,total}=useSelector(state=>state.cart)
  const Dispatch=useDispatch()
  useEffect(()=>{
    Dispatch(totals());
  },[cartItems])

  if(cartItems.length<1){
    return <dive className={style.empty}> 
      <h1 className={style.title}>Your Bag</h1>
      <h4 className={style.subtitle}>is currently empty</h4>
    </dive>
  }
  return <main>
    <h1 className="text-center text-xl mb-6">Your Bags</h1>
     <div>
        {
            cartItems.map((Item)=>{
              return  <CartItem key={Item.id}  {...Item}/>
            })
        }
     </div>
     <hr className="w-[70%] ml-[15%]"/>
     <h4 className="text-end relative right-48 mt-4">Total:${total.toFixed(2)}</h4>
     <button onClick={()=>Dispatch(openModel())} className={style.btn}>Clear Cart</button>
  </main>
}

export default CartContainer
