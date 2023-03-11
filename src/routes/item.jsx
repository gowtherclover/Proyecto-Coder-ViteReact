import Barra from '../components/NavBar'
import ItemDetailContainer from '../components/ItemDetailContainer'
import Footer from '../components/footer'

import { useParams } from 'react-router-dom'

export default function ItemRoot() {
    const params = useParams()

    return (
        <>
            <Barra/>
            <ItemDetailContainer IDcategoria={params.id} categoria={params.category}/>
            <Footer/>
        </>
    )
}
