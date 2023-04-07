import { useEffect, useState } from "react"
import ItemDetail from "../itemDetail"
import { PuffLoader } from "react-spinners"

import {doc,getDoc, getFirestore} from 'firebase/firestore'

export default function itemDetailContainer ({idCategoria}){

    const [ropa,setRopa]=useState([])

    useEffect(()=>{
        const db = getFirestore()
        const itemRef = doc(db,'items',idCategoria);

        getDoc(itemRef).then((snapshot)=>{
            if (snapshot.exists()) {
                setRopa({id:snapshot.id, ...snapshot.data()})
            }
        }).catch((error)=>console.log(error))
    },[])

    return(
        <main className="bg-primario-100 container-fluid pt-16 lg:pt-32">
            {ropa.length!=0?<ItemDetail detalles={ropa}/>:<PuffLoader color="#9c292d" className="mx-auto mt-28 mb-28" size={250}/>}
        </main>
    )
}