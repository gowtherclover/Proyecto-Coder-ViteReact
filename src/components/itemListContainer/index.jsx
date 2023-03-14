import { useEffect, useState } from "react"
import ItemList from "../itemList"

export default function itemListContainer ({categoria,isRoute}){

    const [products,setProducts]=useState([])

    useEffect(()=>{
        setTimeout(()=>{
            fetch(`/mocks/productos.json`)
                .then((res)=>res.json())
                .then((data)=>{
                    if (isRoute) {
                        const productsFiltered = data.filter(
                            (product)=>product.tipo == categoria)
                            
                            setProducts(productsFiltered)
                    }
                    else{setProducts(data)}
                    
                })
                .catch((error)=>console.log(error))
        },2000)
            
    },[categoria]) 
    return(
        <main className="bg-terciario-100 container-fluid pb-8 pt-16 lg:pt-32">
            <ItemList productos={products}/>
        </main>
    )
}