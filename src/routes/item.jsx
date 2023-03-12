import Barra from '../components/navBar'
import ItemDetailContainer from '../components/itemDetailContainer'
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
