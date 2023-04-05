import { NavLink, useNavigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import ItemCart from "../cart"
export default function cartList({productos}){
    const {enviarOrden} = useCartContext()
    const navigate = useNavigate();
    
    function Compra() {
            enviarOrden()

            setTimeout(() => {
                navigate('/');
            }, 3000);
        
    }

    return(
        <div className="grid justify-items-center grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] mx-4 mt-4 xs:mx-none gap-7">
            {productos.map((prod)=>{
                return(
                <ItemCart datos={prod} key={prod.id}/>
                )
            })}

            <button onClick={Compra} className="bg-terciario-700">
                    comprar todo
            </button>
        </div>
    )
} 