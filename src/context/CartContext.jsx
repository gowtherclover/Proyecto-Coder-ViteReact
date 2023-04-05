import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCartContext = () =>useContext(CartContext);

export function CartContextProvider({children}) {
    const [carrito,setCarrito]=useState(() => {
        const datos = localStorage.getItem('carrito');
        return datos ? JSON.parse(datos) : []
    })

    const db = getFirestore()

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

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

    const vaciarCarrito = ()=>{
        setCarrito([])
    };

    let contador = carrito.reduce((acumulador,elemento)=>acumulador + (elemento.cantidad),0)

    let precioTotal= carrito.reduce((acumulador,elemento)=>acumulador + (elemento.precio * elemento.cantidad),0)

    function actualizarOrden(productID,stockFinal) {
        const item = doc(db,'items',productID)
        updateDoc(item,{stock: stockFinal})
    }

    function enviarOrden() {
        
        const order = {
            buyer:{name:'Enzo', mail:'aguilare@fecovita.com',phone: '123456789'},
            items:carrito,
            total:precioTotal,
        }
    
        const collectionRef = collection (db,'orders')

        addDoc(collectionRef,order)
        .then((res)=>{
            const orderID = res.id
            alert(orderID)
            carrito.map((producto)=>{
                const stockFinal = producto.stock - producto.cantidad
                actualizarOrden(producto.id,stockFinal)
                vaciarCarrito()
            })
        })
        .catch((error) => console.log({error}))
    }

    return <CartContext.Provider value={{agregarRopa,
        eliminarRopa,
        vaciarCarrito,
        carrito,
        contador,
        sumarCantidad,
        restarCantidad,
        precioTotal,
        enviarOrden,}}>
            
        {children}
    </CartContext.Provider>
};