import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import style from './cartitem.module.css'
import {useDispatch} from 'react-redux'
import { decrease, increase, removeItem } from '../../redux/cartSlice';


const CartItem = ({id,title,price,img,amount}) => {
   const Dispatch=useDispatch()
   
  return (
    <div  className={style.container}>
       
     <div className={style.subcontainer}>
        <div className={style.left}>
        <img src={img} alt={title} className='w-16 h-16'/>
        <div>
            <h4>{title}</h4>
            <h4>${price}</h4>
            <span onClick={()=>Dispatch(removeItem(id)) } className='cursor-pointer'>remove</span>
        </div>
        </div>
        <div className={style.right}>
         <KeyboardArrowUpIcon onClick={()=>
         
          Dispatch(increase({id}))} />
         <h4>{amount}</h4>
         <KeyboardArrowDownIcon onClick={()=>{
           if(amount===1){
            Dispatch(removeItem(id))
          }
          Dispatch(decrease({id}))}}/>
        </div>
     </div>
    </div>
  )
}

export default CartItem

