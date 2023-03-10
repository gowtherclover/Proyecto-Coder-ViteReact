import { useEffect, useState } from "react"
import ItemCard from "../ItemList"

export default function Contenido ({greeting,categoryId,isCategoryRoute}){

    const [products,setProducts]=useState([])

    useEffect(()=>{
        setTimeout(()=>{
            fetch(`/mocks/productos.json`)
                .then((res)=>res.json())
                .then((data)=>{
                    if (isCategoryRoute) {
                        const productsFiltered = data.filter(
                            (product)=>product.tipo == categoryId)
                            setProducts(productsFiltered)
                    }
                    else{setProducts(data)}
                    
                })
                .catch((error)=>console.log(error))
        },2000)
            
    },[categoryId]) 
    return(
        <main className="bg-terciario-100 container-fluid pb-8 pt-16 lg:pt-32">
            <ItemCard productos={products}/>
        </main>
    )
}