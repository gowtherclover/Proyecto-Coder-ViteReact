import BarraNav from '../components/navBar'
import ItemListContainer from '../components/itemListContainer'
import PiePag from '../components/footer'

import { useParams } from 'react-router-dom'

export default function Root() {
  const params = useParams()
  const isRoute = Boolean (params.id)
  
  return (
    <>
      <BarraNav/>
      <ItemListContainer isRoute={isRoute} idCategoria={params.id}/>
      <PiePag/>
    </>
  )
}


