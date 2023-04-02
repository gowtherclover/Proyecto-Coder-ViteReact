import { useEffect, useState } from "react"
import ItemList from "../itemList"

import {collection,getDocs, getFirestore,query,where} from 'firebase/firestore'
import { useParams } from "react-router-dom"
import { PuffLoader } from "react-spinners"

export default function itemListContainer ({categoria,isRoute}){

    const [products,setProducts]=useState([])

    const params = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const itemsCollection = collection(db, 'items')

        if (isRoute) {
            const q = query(itemsCollection, where('categoria', '==' , categoria))
            
            getDocs(q)
            .then((snapshot)=>{
                const docs = snapshot.docs
                setProducts(docs.map((doc)=>({id:doc.id, ...doc.data()} )))

            }).catch((error)=>console.log(error))
        }
        else{
            getDocs(itemsCollection)
            .then((snapshot)=>{
                const docs = snapshot.docs
                    setProducts(docs.map((doc)=>({id:doc.id, ...doc.data()} )))
            }).catch((error)=>console.log(error))
        }
    },[categoria])
    return(
        <main className="bg-terciario-100 container-fluid pb-8 pt-16 lg:pt-32 flex-grow">
            { products.length!=0?<ItemList productos={products}/>:
            <PuffLoader color="#9c292d" className="mx-auto mt-28 mb-28" size={250}/>}
        </main>
    )
}