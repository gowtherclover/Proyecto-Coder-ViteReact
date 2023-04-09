import CartList from "../cartList"

import { PuffLoader } from "react-spinners"
import { useCartContext } from "../../context/CartContext";

export default function cartContainer (){

    const {carrito}=useCartContext()
    return(
        <main className="bg-gradient-to-b from-primario-200 to-primario-100 container-fluid pb-8 pt-16 lg:pt-32 flex-grow">
            { carrito.length!=0?<CartList productos={carrito} btn={'show'}/>:
            <PuffLoader color="#9c292d" className="mx-auto mt-28 mb-28" size={250}/>}
        </main>
    )
}