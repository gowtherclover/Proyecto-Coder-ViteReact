import { useEffect, useState } from "react"
import ItemList from "../itemList"

import {collection,getDocs, getFirestore,query,where} from 'firebase/firestore'
import { useParams } from "react-router-dom"
import { PuffLoader } from "react-spinners"
import { useProdContext } from "../../context/ProdContext"

export default function itemListContainer ({categoria,isRoute}){

    const {productos,filtroCategoria,AllProducts}=useProdContext()

    useEffect(()=>{
        if(isRoute){
            filtroCategoria(categoria)
        }
        else{
            AllProducts()
        }

    },[categoria])
    return(
        <main className="bg-primario-100 container-fluid pb-8 pt-16 lg:pt-32">
            { productos.length!=0?<ItemList productos={productos}/>:
            <PuffLoader color="#9c292d" className="mx-auto mt-28 mb-28" size={250}/>}
        </main>
    )
}