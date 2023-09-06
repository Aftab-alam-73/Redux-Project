import React from 'react'
import style from './nav.module.css'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useSelector } from 'react-redux';
const Nav = () => {
const {amount ,cartItems}=useSelector((state)=> state.cart)

  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <h1 className={style.title}>Redux Toolkit</h1>
        <LocalMallIcon />
        <span className={style.notification}>{amount}</span>
      </nav>
    </div>
  )
}

export default Nav
