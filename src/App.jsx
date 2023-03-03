import Barra from './components/NavBar'
import Contenido from './components/ItemListContainer'
import { Container } from '@mui/material'
import Fondo from "../src/assets/img/fondo.svg"

function App() {

  return (
    <>
      <Barra/>
      <Container 
        maxWidth="large" 
        sx={{
          mt:9,
          pb:3,
          backgroundImage:`url(${Fondo})`,
          backgroundRepeat:"repeat",
          backgroundSize:"contain"}} 
      >
        <Contenido greeting="Futuro contenido"/>
      </Container>
    </>
  )
}

export default App
