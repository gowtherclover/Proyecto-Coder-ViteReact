import { NavLink } from "react-router-dom";
import 'animate.css'

export default function itemCard ({datos}){
    const {imagen,nombre,categoria,precio,id,stock} = datos

    return(
        <NavLink to={`/item/${categoria}/${id}`} key={id} className="flex flex-row w-full bg-primario-50 rounded overflow-hidden transition ease-in-out delay-150 duration-300 hover:scale-105 hover:bg-terciario-200 hover:shadow-lg hover:shadow-gray-500/50 border border-gray-400 hover:border-terciario-700 animate__animated animate__flipInX animate__delay-1s">
            <div className="bg-terciario-200 basis-[40%] w-40 md:w-52 h-40 md:h-auto shrink-0 grow-0">
                <img className="w-full h-full object-cover" src={imagen} alt={`${nombre}`}/>
            </div>
            <div className="relative flex flex-col px-4 py-2 flex-grow basis-[60%]">
                <h4 className="text-md mb-2 text-primario-900 uppercase basis-[50%]">{`${nombre}`}</h4>
                <p className="text-lg font-bold text-secundario-500 basis-[50%]">{`$ ${precio}`}</p>
                <div className="absolute bottom-2 right-2 ">
                    {stock === 0 ? (
                        <span className="text-red-800 bg-red-100 inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium">{`${stock} en stock`}</span>) : (0 < stock && stock < 6) ? (
                        <span className="text-yellow-800 bg-yellow-100 inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium">{`${stock} en stock`}</span>) : (
                        <span className="text-green-800 bg-green-100 inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium">{`${stock} en stock`}</span>
                    )}
                </div>
            </div>
        </NavLink>
    )
}