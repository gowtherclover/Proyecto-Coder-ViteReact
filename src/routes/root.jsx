import BarraNav from '../components/navBar'
import ItemListContainer from '../components/itemListContainer'
import PiePag from '../components/footer'
import { CartContextProvider } from '../context/CartContext'
import { ProdContextProvider } from '../context/ProdContext'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
        />
        <PiePag/>
      </CartContextProvider>
    </ProdContextProvider>
  )
}


