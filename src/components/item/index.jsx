import { NavLink } from "react-router-dom";
import 'animate.css'

export default function itemCard ({datos}){
    const {imagen,nombre,categoria,precio,id,stock} = datos

    return(
        <NavLink to={`/item/${categoria}/${id}`} key={id} className="flex flex-row w-full bg-primario-50 rounded overflow-hidden transition ease-in-out delay-150 duration-300 hover:scale-105 hover:bg-primario-200 hover:shadow-lg hover:shadow-gray-500/50 border border-gray-400 animate__animated animate__flipInX animate__delay-1s">
            <div className="bg-terciario-200 basis-[40%] w-40 md:w-52 h-40 md:h-auto shrink-0 grow-0">
                <img className="w-full h-full object-cover" src={imagen} alt={`${nombre}`}/>
            </div>
            <div className="flex flex-col px-3 py-2 flex-grow basis-[60%]">
                <h4 className="text-md mb-2 text-primario-900 uppercase basis-[60%]">{`${nombre}`}</h4>
                <p className="text-lg font-bold text-secundario-500 basis-[20%]">{`$ ${precio}`}</p>
                <div className="text-sm basis-[20%]">
                    {stock === 0 ? (
                        <span className="text-red-500">{`Cantidad disponible: ${stock}`}</span>) : (0 < stock && stock < 6) ? (
                        <span className="text-orange-500">{`Cantidad disponible: ${stock}`}</span>) : (
                        <span className="text-green-500">{`Cantidad disponible: ${stock}`}</span>
                    )}
                </div>
            </div>
        </NavLink>
    )
}