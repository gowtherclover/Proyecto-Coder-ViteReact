import 'animate.css'

export default function itemCart ({datos}){
    const {imagen,nombre,precio,id,stock,cantidad} = datos

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
        <div key={id} className={`flex flex-row bg-white p-4 rounded-lg shadow-md animate__animated animate__flipInX animate__delay-1s`}>
            <img className="w-28 h-28 object-contain mr-4" src={imagen} alt={`${nombre}`}/>
            <div className="flex-1 border-l border-gray-300 pl-4">
                <h4 className="text-md font-medium mb-2">{`${letrasMayusculas(nombre)}`}</h4>
                <p className="text-gray-500 text-sm ">{`Cantidad: ${cantidad}`}</p>
                <p className="text-gray-500 text-lg font-bold">{`$ ${precio}`}</p>
                

            </div>
        </div>
    )
}