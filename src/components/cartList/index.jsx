import { NavLink } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import ItemCart from "../cartItem"
export default function cartList({productos,btn}){
    const {precioTotal} = useCartContext()

    return(
        <>
            <div className="grid grid-cols-1 mx-auto mt-4 gap-3 w-4/5 sm:w-3/5">
                {productos.map((prod)=>{
                    return(
                    <ItemCart datos={prod} key={prod.id}/>
                    )
                })}
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Total</p>
                    <p>{`$ ${precioTotal}`}</p>
                </div>
                <NavLink to={'/checkout'} className={`${btn} text-center bg-terciario-500 hover:bg-terciario-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:translate-y-1`}>
                    Finalizar compra
                </NavLink>

            </div>
            

        </>
    )
} 