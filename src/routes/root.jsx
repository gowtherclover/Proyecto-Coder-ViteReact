import Barra from '../components/NavBar'
import ItemListContainer from '../components/ItemListContainer'
import Footer from '../components/footer'

import { useParams } from 'react-router-dom'

function Root() {
  const params = useParams()
  const isRoute = Boolean (params.id)
  
  return (
    <>
      <Barra/>
      <ItemListContainer isRoute={isRoute} IDcategoria={params.id}/>
      <Footer/>
    </>
  )
}

export default Root
