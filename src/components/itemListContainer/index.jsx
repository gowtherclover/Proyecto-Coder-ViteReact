import { Container} from "@mui/material"
import { useEffect, useState } from "react"
import Productos from "../../mocks/productos.json"
import ItemCard from "../ItemList"

export default function Contenido ({greeting}){

    return(
        <Container 
            sx={{
                mt:5,
                display:"flex",
                flexDirection:"row",
                flexWrap:"wrap",
                justifyContent:"space-around"
            }}
        >
            {/* <p style={{ textAlign:"center" }}>{greeting}</p> */}
            {/* <ItemCard products={products}/> */}
        </Container>
    )
}