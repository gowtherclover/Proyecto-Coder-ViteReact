import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () =>useContext(CartContext);

export function CartContextProvider({children}) {
    const [carrito,setCarrito]=useState([])
    console.log(carrito);
    const existe = (ropa)=>carrito.some(buscar=>buscar.id === ropa.id);

    const agregarRopa=(ropa,cantidad)=>{
        if (cantidad==null) {
            cantidad=1
        }
        let indice = carrito.findIndex((elemento)=>elemento.id === ropa.id)

        if(indice!==-1){
            if (carrito[indice].cantidad<carrito[indice].stock) {
                const actualizarCarrito = [...carrito];
                actualizarCarrito[indice].cantidad += cantidad;
                setCarrito(actualizarCarrito)
            }
            else{
                console.log("no hay stock");
            }
        } 
        else {
            const nuevaRopa = {cantidad, ...ropa}
            setCarrito([...carrito, nuevaRopa]);
        }
    };

    const sumarCantidad = (ropa) => agregarRopa(ropa, 1);
    const restarCantidad = (ropa) => {
        let indice = carrito.findIndex((elemento)=>elemento.id === ropa.id)
        const cantidadActual = carrito[indice].cantidad
        if (cantidadActual === 1) {
            const actualizarCarrito = carrito.filter((el) => el.id !== ropa.id);
            setCarrito(actualizarCarrito);
        } else {
            const actualizarCarrito = [...carrito];
            actualizarCarrito[indice].cantidad -= 1;
            setCarrito(actualizarCarrito);
        }
    }

    const eliminarRopa = (ropa)=>{
        const eliminarRopa=carrito.filter((buscar)=>buscar.id !== ropa.id)
        return setCarrito(eliminarRopa)
    };

    const vaciarCarrito = ()=>{setCarrito([])};

    const cantidades = () =>{
        /* let indice = carrito.findIndex((elemento)=>{if(elemento.id === ropa.id){return true}}) */
    }

    let contador = carrito.length

    return <CartContext.Provider 
    value={{
        agregarRopa,
        eliminarRopa,
        vaciarCarrito,
        cantidades,
        carrito,
        contador,
        sumarCantidad,
        restarCantidad,
        }}>
            
        {children}
    </CartContext.Provider>
};