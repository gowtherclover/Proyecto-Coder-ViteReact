import BarraNav from '../components/navBar'
import ItemDetailContainer from '../components/itemDetailContain'
import PiePag from '../components/footer'

import { useParams } from 'react-router-dom'

export default function itemRoot() {
    const params = useParams()

    return (
        <>
            <BarraNav/>
            <ItemDetailContainer idCategoria={params.id} categoria={params.category}/>
            <PiePag/>
        </>
    )
}
