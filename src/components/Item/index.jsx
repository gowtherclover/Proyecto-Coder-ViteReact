import { useEffect, useState } from "react";
import { AiOutlineStar,AiTwotoneStar } from "react-icons/ai";
export default function Item ({datos}){
    const {img,tipo,color,talle,precio,id} = datos
    const [like,setLike] = useState("hidden")
    const [dislike,setDislike] = useState("show")
    
    const botonFav = function (){
        if (like=="hidden") {
            setLike("show")
            setDislike("hidden")
        }
        else{
            setLike("hidden")
            setDislike("show")
        }
    }

    return(
        <div className={`bg-white max-w-xs rounded overflow-hidden transition ease-in-out delay-150 duration-300 hover:scale-105 hover:bg-primario-200 hover:shadow-lg hover:shadow-gray-500/50 border border-gray-400`}>
            <div className="bg-stone-300 relative">
                <button className="absolute top-2 left-2" onClick={botonFav}>
                    <AiOutlineStar className={`text-primario-600 h-5 w-5 ${dislike}`}/>
                    <AiTwotoneStar className={`text-primario-600 h-5 w-5 ${like}`}/>
                </button>
                <img className="w-full " src={img} alt={`img-${tipo}-${color}`}/>
            </div>
            <hr className='border-gray-400'/>
            <div className="px-6 py-4">
                <h4 className="text-md mb-2">{`${tipo} ${color}`}</h4>
                <p className="text-gray-700 text-md">{`Talle: ${talle}`}</p>
                <p className="text-gray-700 text-lg font-bold">{`$ ${precio}`}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                
            </div>
        </div>
    )
}