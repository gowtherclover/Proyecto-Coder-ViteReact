import { Container} from "@mui/material"
import Products from "../Products"
import Tarjeta from "../Card"

export default function Contenido ({greeting}){
    return(
        <Container sx={{mt:5}}>
            <p style={{ textAlign:"center" }}>{greeting}</p>
            <Products/>
            <Tarjeta/>
        </Container>
    )
}