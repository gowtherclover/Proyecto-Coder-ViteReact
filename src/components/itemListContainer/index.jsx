import { useEffect, useState } from "react"
import Productos from "../../mocks/productos.json"
import ItemCard from "../ItemList"

export default function Contenido ({greeting}){

    const [products,setProducts]=useState([])

    useEffect(()=>{
            fetch(`http://localhost:5173/src/mocks/productos.json`)
                .then((res)=>res.json())
                .then((res)=>setTimeout(() => {setProducts(res)}, 3000))
                .catch((error)=>console.log(error))
    },[]) 
    /* useEffect(()=>{
            array = new Promise((resolve, reject) => {
                setTimeout(() => {resolve(Productos)}, 2000);
            });

            array
            .then((data) => setProducts(data))
            .catch((error) => console.log(error));
    }) */

    return(
        <main className="fondo container-fluid">
            <p>container</p>
            <p>container</p>
            <p>container</p>
            <p>container</p>
            <ItemCard productos={products}/>
        </main>
    )
}