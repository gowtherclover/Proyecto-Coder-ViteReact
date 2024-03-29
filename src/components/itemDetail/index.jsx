import { AiTwotoneStar } from "react-icons/ai";
import { useCartContext } from "../../context/CartContext";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function ItemDetail ({detalles}){
    const {imagen,nombre,precio,descripcion,id,stock} = detalles

    const {agregarRopa} = useCartContext();

    return (
        <div className="pt-6 bg-gradient-to-b from-primario-200 to-primario-100">
            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] ">
                <div className="  max-w-2xl row-span-2 lg:row-span-3 lg:col-span-1">
                    <img
                    src={imagen}
                    alt={nombre}
                    className="w-full h-full object-cover "
                    />
                </div>
                <div className=" lg:col-span-2 pl-4 ">
                    <h1 className="text-2xl font-bold tracking-tight text-terciario-700 sm:text-3xl uppercase drop-shadow-xl">{nombre}</h1>
                    <div className="py-10 lg:pb-16 lg:pr-8 lg:pt-6">
                        <div>
                            <h3 className="sr-only">Descripción</h3>
                
                            <div className="space-y-6">
                                <p className="text-base text-terciario-600">{descripcion}</p>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className=" pl-4 mt-4 lg:row-span-3 lg:mt-0 lg:col-start-2 lg:col-span-2">
                    <h2 className="sr-only">Informacion del producto</h2>
                    <p className="text-3xl tracking-tight text-primario-500 drop-shadow-xl">{`$ ${precio}`}</p>
        
                    <div className="mt-6">
                        <h3 className="sr-only">Reviews</h3>
                        <div className="flex items-center">
                            <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                                <AiTwotoneStar
                                key={rating}
                                className={classNames(
                                    reviews.average > rating ? 'text-secundario-500 transition-colors duration-300' : 'text-gray-400',
                                    'h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                            />
                            ))}
                            </div>
                            <p className="sr-only">{reviews.average} out of 5 stars</p>
                            <a href={reviews.href} className="ml-3 text-sm font-medium text-primario-600 hover:text-primario-500">
                            {reviews.totalCount} Opiniones
                            </a>
                        </div>
                    </div>
                    {detalles.stock==0?
                        <button
                        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-terciario-500 transition-all duration-300 hover:bg-terciario-600 px-8 py-3 text-base font-medium text-white focus:outline-none"
                    >
                        No disponible
                    </button>:
                    <>
                    <button
                        onClick={()=>agregarRopa(detalles)}
                        type="submit"
                        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-secundario-500 transition-all duration-300 hover:bg-secundario-600 px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-secundario-500 focus:ring-offset-2"
                    >
                        Agregar al carrito
                    </button></>}
                </div>
            </div>
        </div>
    )
}