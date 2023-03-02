import Barra from './components/NavBar'
import Contenido from './components/ItemListContainer'
import { Container } from '@mui/material'

function App() {

  return (
    <Container>
      <Barra/>
      <Contenido greeting="Futuro contenido"/>
    </Container>
  )
}

export default App
