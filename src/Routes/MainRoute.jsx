import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Componenet/Home/Home'
import Eyeglasses from '../Componenet/Eyeglasses'
import Sunglass from '../Componenet/Sunglass'
import Lenses from '../Componenet/Lenses'
import Collection from '../Componenet/Collection'
import Contacts from '../Componenet/Contacts'
import Brand from '../Componenet/Brand'
import SingPro from '../Componenet/SingPro'
import Cart from '../Componenet/Cart'
const MainRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Eyeglasses" element={<Eyeglasses/>}></Route>
        <Route path="/Sunglass" element={<Sunglass/>}></Route>
        <Route path="/Lenses" element={<Lenses/>}></Route>
        <Route path="/Collection" element={<Collection/>}></Route>
        <Route path="/Contacts" element={<Contacts/>}></Route>
        <Route path='/Brand' element={<Brand/>}></Route>
        <Route path="/SingPro/:id" element={<SingPro/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>






    </Routes>
  )
}

export default MainRoute
