import { NavLink } from "react-router-dom";

export default function itemCard ({datos}){
    const {imagen,nombre,categoria,precio,id,stock} = datos

    function letrasMayusculas(string) {
        const palabras = string.split(' ')

        const capitalize = palabras.map( el =>{
            const primerLetra = el.charAt(0).toUpperCase()
            const restoPalabra= el.slice(1)
            return `${primerLetra}${restoPalabra}`
        })

        return capitalize.join(' ')
    }

    return(
        <NavLink to={`/item/${categoria}/${id}`} key={id} className={`flex flex-row w-full bg-white rounded overflow-hidden transition ease-in-out delay-150 duration-300 hover:scale-105 hover:bg-primario-200 hover:shadow-lg hover:shadow-gray-500/50 border border-gray-400`}>
            <div className="bg-stone-300 basis-[40%] grow-0 shrink-0">
                <img className="w-full object-cover" src={imagen} alt={`${nombre}`}/>
            </div>
            <div className="px-6 py-4 basis-[60%] grow shrink flex flex-col justify-between">
                <h4 className="text-md mb-2 basis-[60%]">{`${letrasMayusculas(nombre)}`}</h4>
                <p className="text-gray-700 text-lg font-bold basis-[20%]">{`$ ${precio}`}</p>

                <div className="text-sm basis-[20%]">
                    {stock==0?
                    <span className="text-red-500">{`Cantidad disponible: ${stock}`}</span>:(0<stock && stock<6)?
                    <span className="text-orange-500">{`Cantidad disponible: ${stock}`}</span>:
                    <span className="text-green-500">{`Cantidad disponible: ${stock}`}</span>}
                </div>

            </div>
            
        </NavLink>
    )
}