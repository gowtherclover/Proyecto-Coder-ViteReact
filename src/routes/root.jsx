import barraNav from '../components/navBar'
import itemListContainer from '../components/itemListContainer'
import piePag from '../components/footer'

import { useParams } from 'react-router-dom'

function Root() {
  const params = useParams()
  const isRoute = Boolean (params.id)
  
  return (
    <>
      <barraNav/>
      <itemListContainer isRoute={isRoute} idCategoria={params.id}/>
      <piePag/>
    </>
  )
}

export default Root
