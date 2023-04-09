import BarraNav from '../components/navBar'
import CheckoutContainer from '../components/checkoutContainer'
import PiePag from '../components/footer'
import { CartContextProvider } from '../context/CartContext'
import { ProdContextProvider } from '../context/ProdContext'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'


export default function checkout() {
  const {pathname}=useLocation()

  useEffect(()=>{
      window.scrollTo(0,0)
  },[pathname])

  return (
    <ProdContextProvider>
      <CartContextProvider>
        <BarraNav/>
        <CheckoutContainer/>
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
