import BarraNav from '../components/navBar'
import ItemDetailContainer from '../components/itemDetailContainer'
import PiePag from '../components/footer'
import { CartContextProvider } from '../context/CartContext'


import { useParams } from 'react-router-dom'

export default function itemRoot() {

    const params = useParams()

    return (
        <CartContextProvider>
            <BarraNav/>
            <ItemDetailContainer idCategoria={params.id}/>
            <PiePag/>
        </CartContextProvider>
    )
}
