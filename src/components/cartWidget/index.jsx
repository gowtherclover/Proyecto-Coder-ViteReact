import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import {GiShoppingBag} from "react-icons/gi";
import { HiOutlineX} from "react-icons/hi";

const products = [
    {
        id:8,
        tipo:"Conjunto",
        img:"/assets/img/shorts/conjunto-rojo.png",
        modelo:"Night Fire",
        descripcion:"Este conjunto deportivo de mujer está diseñado para mantener el estilo y la comodidad en todo momento. El top negro de tirantes anchos ofrece un soporte óptimo durante cualquier actividad física, mientras que el short rojo con detalles en gris proporciona una gran libertad de movimiento. El material de alta calidad es suave al tacto y transpirable, lo que mantiene la piel fresca y seca incluso durante los entrenamientos más intensos. El diseño elegante y moderno de este conjunto deportivo lo convierte en una excelente opción para cualquier actividad deportiva, desde el gimnasio hasta el campo de entrenamiento. Además, su combinación de colores negro, rojo y gris lo hace muy versátil y fácil de combinar con otros accesorios deportivos. ¡Este conjunto es una excelente elección para las mujeres que buscan comodidad y estilo en su ropa deportiva!",
        precio:6500,
        cantidad:2
    },
    {
        id:4,
        tipo:"Calza",
        img:"/assets/img/calzas/calza-negra.png",
        modelo:"Wild Spots",
        descripcion:"La calza Wild Spots presenta un estampado vibrante y lleno de energía. Con manchas de color gris y amarillo, esta prenda te garantiza un look moderno y desenfadado. Su diseño ajustado se adapta a tu figura para brindarte la máxima comodidad y libertad de movimiento durante tus entrenamientos o actividades diarias. El tejido suave y elástico de alta calidad te proporciona una sensación de suavidad y frescura en la piel, mientras que su cintura elástica se ajusta perfectamente a tu cintura para brindarte un ajuste seguro. Con la calza Wild Spots, puedes estar segura de que lucirás a la moda y cómoda al mismo tiempo.",
        precio:5200,
        cantidad:1
    },
]

export default function CartWidget({cantidad,widget}){

    const [open, setOpen] = useState(false)

    function abrirModal() {
        setOpen(true);
    } 

    function cerrarModal() {
        setOpen(false);
    }

    return(
        <div className={`lg:${widget} relative`}>
            <button
                onClick={abrirModal}
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
                <span className="sr-only">Carrito</span>
                <GiShoppingBag className="text-primario-700 h-7 w-7 lg:text-white" aria-hidden="true" />
            </button>
            <div className="items-center absolute -top-2 left-6 inline-flex rounded-full h-5 w-auto bg-terciario-900 text-white px-1.5">
                <span>{cantidad}</span>
            </div>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={cerrarModal}>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title className="text-lg font-medium text-gray-900">Carrito</Dialog.Title>
                                                        <div className="ml-3 flex h-7 items-center">
                                                            <button
                                                                type="button"
                                                                className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                                onClick={() => setOpen(false)}
                                                            >
                                                                <span className="sr-only">Cerrar Carrito</span>
                                                                <HiOutlineX className="h-6 w-6" aria-hidden="true" />
                                                            </button>
                                                        </div>
                                                </div>

                                                <div className="mt-8">
                                                    <div className="flow-root">
                                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                            {products.map((product) => (
                                                            <li key={product.id} className="flex py-6">
                                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                <img
                                                                    src={product.img}
                                                                    alt={`${product.tipo}-${product.modelo}`}
                                                                    className="h-full w-full object-cover object-center"
                                                                />
                                                                </div>

                                                                <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                    <h3>
                                                                        {product.tipo} {product.modelo}
                                                                    </h3>
                                                                    <p className="ml-4">$ {product.precio}</p>
                                                                    </div>
                                                                    <p className="mt-1 text-sm text-gray-500">{product.modelo}</p>
                                                                </div>
                                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                                    <p className="text-gray-500">Cantidad: {product.cantidad}</p>

                                                                    <div className="flex">
                                                                    <button
                                                                        type="button"
                                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                    >
                                                                        Eliminar
                                                                    </button>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <p>Subtotal</p>
                                                    <p>$ xxx.xxx</p>
                                                </div>
                                                <div className="mt-6">
                                                    <a
                                                    href="#"
                                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                    >
                                                    Ir a finalizar compra
                                                    </a>
                                                </div>
                                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                    <p>
                                                        <button
                                                            type="button"
                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            Continuar comprando
                                                            <span aria-hidden="true"> &rarr;</span>
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}