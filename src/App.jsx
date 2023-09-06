import React from 'react'
import Nav from './components//nav/Nav'
import CartContainer from './components/cartContainer/CartContainer'
import Model from './components/model/Model'
import { useSelector } from 'react-redux'

const App = () => {
  const {isOpen}=useSelector((state)=>state.model)

  return (
    <div >
     {isOpen && <Model/>}
      <Nav/>
      <CartContainer/>
    </div>
  )
}

export default App
