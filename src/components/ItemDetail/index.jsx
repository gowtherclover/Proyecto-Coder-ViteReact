import { useState } from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";


export default function itemDetail ({detalles}){

    const [like,setLike] = useState("text-terciario-500")
    
    const botonFav = function (){
        if (like=="text-terciario-500") {
            setLike("text-primario-400")
        }
        else{
            setLike("text-terciario-500")
        }
    }

    return(
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-5 mx-auto relative">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt={`${detalles.tipo}-${detalles.modelo}`} className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-300" src={detalles.img}/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">MALKA Indumentaria</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{detalles.tipo} {detalles.modelo}</h1>
                        <button className="absolute right-7 top-7 xl:left-36 lg:left-[7.4rem] lg:top-9 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className={`w-5 h-5 ${like} transition ease-in-out delay-75 duration-300 hover:scale-125`} viewBox="0 0 24 24" onClick={botonFav}>
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
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                                    <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        </div>
                        <div className="flex">
                        <span className="title-font font-medium text-2xl text-gray-900">{`$ ${detalles.precio}`}</span>
                        <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}