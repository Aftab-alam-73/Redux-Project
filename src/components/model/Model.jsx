import React from 'react'
import style from './model.module.css'
import { closeModel } from '../../redux/modelSlice'
import { useDispatch } from 'react-redux'
import { ClearCart } from '../../redux/cartSlice'
const Model = () => {
    const dispatch=useDispatch()
    const handleclick=(e)=>{
      e.preventDefault();
      dispatch(ClearCart())
      dispatch(closeModel())
    }
  return (
    <div className={style.container}>
        <div className={style.content}>
            <h3 className={style.heading}> Do you want to clear all your items from the cart</h3>
             <div className={style.buttons}>

            <button className={style.btn} onClick={handleclick}>confirm</button>
            <button className={style.btn} onClick={()=>dispatch(closeModel())}>cancel</button>
             </div>
        </div>
      
    </div>
  )
}

export default Model
