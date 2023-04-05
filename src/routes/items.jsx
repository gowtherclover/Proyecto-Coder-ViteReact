import BarraNav from '../components/navBar'
import ItemDetailContainer from '../components/itemDetailContainer'
import PiePag from '../components/footer'
import { CartContextProvider } from '../context/CartContext'


import { useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function itemRoot() {

    const params = useParams()

    const {pathname}=useLocation()

    useEffect(()=>{
        window.scrollTo(0,0)
    },[pathname])

    return (
        <CartContextProvider>
            <BarraNav/>
            <ItemDetailContainer idCategoria={params.id}/>
            <PiePag/>
        </CartContextProvider>
    )
}
