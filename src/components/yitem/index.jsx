import { useEffect, useState } from "react";
import { AiOutlineStar,AiTwotoneStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function itemCard ({datos}){
    const {img,tipo,modelo,precio,id} = datos

    return(
        <NavLink to={`/item/${tipo}/${id}`} key={id} className={`bg-white max-w-xs rounded overflow-hidden transition ease-in-out delay-150 duration-300 hover:scale-105 hover:bg-primario-200 hover:shadow-lg hover:shadow-gray-500/50 border border-gray-400`}>
            <div className="bg-stone-300">
                <img className="w-full " src={img} alt={`img-${tipo}-${modelo}`}/>
            </div>
            <hr className='border-gray-400'/>
            <div className="px-6 py-4">
                <h4 className="text-md mb-2">{`${tipo} ${modelo}`}</h4>
                <p className="text-gray-700 text-lg font-bold">{`$ ${precio}`}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                
            </div>
        </NavLink>
    )
}