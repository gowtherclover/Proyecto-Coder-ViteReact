import { useEffect, useState } from "react"
import itemDetail from "../itemDetail"

export default function itemDetailContainer ({IDcategoria,categoria}){
    const [item,setItem]=useState([])

    useEffect(()=>{
        setTimeout(()=>{
            fetch(`/mocks/productos.json`)
                .then((res)=>res.json())
                .then((data)=>{
                    const itemFiltered = data.find(
                        (product)=>{return product.id==IDcategoria && product.tipo==categoria})
                            
                    setItem(itemFiltered)
                    
                })
                .catch((error)=>console.log(error))
        },2000)
            
    },[]) 

    return(
        <main className="bg-terciario-200 container-fluid pt-16 lg:pt-32">
            <itemDetail detalles={item}/>
        </main>
    )
}