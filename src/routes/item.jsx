import barraNav from '../components/navBar'
import itemDetailContainer from '../components/itemDetailContainer'
import piePag from '../components/footer'

import { useParams } from 'react-router-dom'

export default function ItemRoot() {
    const params = useParams()

    return (
        <>
            <barraNav/>
            <itemDetailContainer IDcategoria={params.id} categoria={params.category}/>
            <piePag/>
        </>
    )
}
