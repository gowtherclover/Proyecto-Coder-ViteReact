import Barra from '../components/NavBar'
import Contenido from '../components/ItemListContainer'
import { useParams } from 'react-router-dom'

function Root() {
  const params = useParams()
  const isCategoryRoute = Boolean (params.id)

  return (
    <>
      <Barra/>
      
      <Contenido greeting="Futuro contenido" isCategoryRoute={isCategoryRoute} categoryId={params.id}/>
    </>
  )
}

export default Root
