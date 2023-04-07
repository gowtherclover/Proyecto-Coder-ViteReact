import { useEffect, useState } from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { useCartContext } from "../../context/CartContext";

import { RadioGroup } from '@headlessui/react'

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function ItemDetail ({detalles}){
    const {imagen,nombre,precio,descripcion,id,stock} = detalles

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);


    /* const [like,setLike] = useState("text-terciario-500")
    
    const botonFav = function (){
        if (like=="text-terciario-500") {
            setLike("text-primario-400")
        }
        else{
            setLike("text-terciario-500")
        }
    } */
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
        
                {/* Options */}
                <div className=" pl-4 mt-4 lg:row-span-3 lg:mt-0 lg:col-start-2 lg:col-span-2">
                    <h2 className="sr-only">Informacion del producto</h2>
                    <p className="text-3xl tracking-tight text-primario-500 drop-shadow-xl">{`$ ${precio}`}</p>
        
                    {/* Reviews */}
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
        
                    <button
                        type="submit"
                        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-secundario-500 transition-all duration-300 hover:bg-secundario-600 px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-secundario-500 focus:ring-offset-2"
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    )
}
        /* <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-5 mx-auto relative">
                <div className="md:w-4/5 mx-auto flex flex-wrap">
                    <img alt={`${detalles.nombre}`} className="md:w-1/2 md:h-2/3 w-full object-contain object-center rounded border border-gray-300" src={detalles.imagen}/>
                    <div className="md:w-1/2 w-full md:pl-10 md:py-6 mt-6 md:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">MALKA Indumentaria</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{detalles.nombre}</h1>
                        <button className="absolute right-7 top-7 xl:left-36 md:left-[7.4rem] md:top-9 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={`w-5 h-5 ${like} transition ease-in-out delay-75 duration-300 hover:scale-125`} viewBox="0 0 24 24" onClick={botonFav}>
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                            </svg>
                        </button>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <AiTwotoneStar className={`text-primario-500 h-5 w-5 `}/>
                                    <AiTwotoneStar className={`text-primario-500 h-5 w-5 `}/>
                                    <AiTwotoneStar className={`text-primario-500 h-5 w-5 `}/>
                                    <AiTwotoneStar className={`text-primario-500 h-5 w-5 `}/>
                                    <AiOutlineStar className={`text-primario-500 h-5 w-5 `}/>
                                    <span className="text-gray-600 ml-3">13 Opiniones</span>
                                </span>
                            </div>
                        <p className="leading-relaxed">{detalles.descripcion}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                        <div className="flex ml-6 items-center">
                            <span className="mr-3">Talle</span>
                            <div className="relative">
                                <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-primario-500 text-base pl-3 pr-10">
                                    <option>SM</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                    <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        </div>
                        <div className="flex">
                        <span className="title-font font-medium text-2xl text-gray-900">{`$ ${detalles.precio}`}</span>
                        {detalles.stock==0?
                        <button className=" flex ml-auto text-white bg-gray-400 border-0 py-2 px-6 focus:outline-none rounded">No Disponible</button>:
                        <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={()=>agregarRopa(detalles)}>Comprar</button>}
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    )

}*/