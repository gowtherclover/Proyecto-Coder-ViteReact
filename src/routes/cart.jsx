import BarraNav from '../components/navBar'
import CartContainer from '../components/cartContainer'
import PiePag from '../components/footer'
import { CartContextProvider } from '../context/CartContext'
import { ProdContextProvider } from '../context/ProdContext'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLocation } from 'react-router-dom'
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