import BarraNav from '../components/navBar'
import CartContainer from '../components/cartContainer'
import PiePag from '../components/footer'
import { CartContextProvider } from '../context/CartContext'
import { ProdContextProvider } from '../context/ProdContext'

import { useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react'


export default function cart() {
    const {pathname}=useLocation()

    useEffect(()=>{
        window.scrollTo(0,0)
    },[pathname])

    return (
        <ProdContextProvider>
            <CartContextProvider>
                <BarraNav/>
                    <CartContainer/>
                <PiePag/>
            </CartContextProvider>
        </ProdContextProvider>
    )
}