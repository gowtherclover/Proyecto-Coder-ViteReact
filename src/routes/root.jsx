import BarraNav from '../components/navBar'
import ItemListContainer from '../components/itemListContainer'
import PiePag from '../components/footer'
import { CartContextProvider } from '../context/CartContext'
import { ProdContextProvider } from '../context/ProdContext'

import { useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react'


export default function Root() {
  const params = useParams()
  const isRoute = Boolean (params.id)
  const {pathname}=useLocation()

  useEffect(()=>{
      window.scrollTo(0,0)
  },[pathname])

  return (
    <ProdContextProvider>
      <CartContextProvider>
        <BarraNav/>
        <ItemListContainer isRoute={isRoute} categoria={params.id}/>
        <PiePag/>
      </CartContextProvider>
    </ProdContextProvider>
  )
}


