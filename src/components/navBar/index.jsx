import CartWidget from '../cartWidget';

import { Fragment, useEffect, useState } from 'react'
import { Dialog,Menu,Transition  } from '@headlessui/react'
import { HiOutlineMenu,HiOutlineX,HiHome,HiUserCircle } from "react-icons/hi";
import { GiClothes } from "react-icons/gi";
import { SlSocialFacebook,SlSocialInstagram } from "react-icons/sl";
import { ImWhatsapp } from "react-icons/im";
import { NavLink } from 'react-router-dom';

import logo from '/assets/img/logo-malka.png'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useProdContext } from '../../context/ProdContext';

export default function BarraNav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [categorias,setCategorias]=useState([])

    const {buscar}=useProdContext()

    useEffect(()=>{
        const db = getFirestore()
        const itemsCollection = collection(db, 'categories')

        getDocs(itemsCollection)
        .then((snapshot)=>{
            const docs = snapshot.docs
            setCategorias(docs.map((doc)=>({id:doc.id, ...doc.data()} )))

        }).catch((error)=>console.log(error))
    },[])

    const handleChange= (event)=>{
        const input = event.target.value
        buscar(input)
    }

    return (
    <header className={`isolate bg-white fixed inset-x-0 top-0 z-10`}>
        <div className='bg-gradient-to-t from-primario-600 to-primario-400 pb-1 px-6 pt-3 lg:px-8 hidden lg:flex lg:justify-between'>
            <div className='flex justify-between w-28 text-white'>
                <a href="#facebook"><SlSocialFacebook className='h-6 w-6'/></a>
                <a href="#insta"><SlSocialInstagram className='h-6 w-6'/></a>
                <a href="#wp"><ImWhatsapp className='h-6 w-6'/></a>
            </div>
            <CartWidget widget="block"/>
            <a href="#" className="flex text-white text-sm font-semibold leading-7">
                <HiUserCircle className='h-7 w-7'/>
            </a>
        </div>
        <div className="px-6 py-3 lg:px-8 ">
            <nav className="flex items-center justify-between" aria-label="Global">
                <div className="flex lg:flex-1">
                    <NavLink to={'/'} className="-m-1.5 p-1.5">
                            <span className="sr-only">MALKA</span>
                            <img className="w-[100px] overflow-hidden shadow-md shadow-gray-500" src={logo} alt="MALKA" />
                    </NavLink>
                </div>
                <CartWidget widget="hidden"/>
                {/* Boton hamburguesa */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Abrir Menu</span>
                        <HiOutlineMenu className="text-primario-700 h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                {/* Opciones del nav */}
                <div className="hidden lg:flex lg:gap-x-12">
                    <NavLink to={'/'} className="uppercase text-sm font-semibold leading-6 text-gray-900">
                        Inicio
                    </NavLink>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="uppercase inline-flex text-sm font-semibold leading-6 text-gray-900">
                                Productos
                            </Menu.Button>
                        </div>
                        <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {categorias.map((ropa)=>{
                                    return(
                                        <div key={ropa.key} className="px-1 py-1 ">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <NavLink to={`/category/${ropa.nombre}`}>
                                                        <button
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            className={`${
                                                            active ? 'bg-primario-500 text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm uppercase`}
                                                        >
                                                        {ropa.nombre}
                                                        </button>
                                                    </NavLink>
                                                    
                                                )}
                                            </Menu.Item>
                                        </div>
                                    )
                                })}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <input className=" rounded-full block w-60 bg-gray-300 py-4 pl-4 pr-12 text-slate-900 placeholder:text-slate-600 sm:text-sm sm:leading-6" placeholder="Buscar..." aria-label="Buscar ropa" type="text" onChange={handleChange}/>
                </div>
            </nav>
            {/* Modo movil */}
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-3 lg:hidden">
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">MALKA</span>
                        <img className="w-[100px]" src={logo} alt="MALKA" />
                    </a>
                    <CartWidget />
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(false)}
                        >
                        <span className="sr-only">Close menu</span>
                        <HiOutlineX className="text-primario-700 text-primario-500 h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="w-full space-y-2 py-6">
                        <NavLink to={'/'} className="-mx-3 flex rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 uppercase">
                                <HiHome className="text-primario-700 h-6 w-6 mr-2"/>
                                <p>Inicio</p>
                        </NavLink>
                        
                        <Menu as="div" className="w-full inline-block text-left">
                        <div className='w-full '>
                            <Menu.Button className="w-full py-3 rounded-lg inline-flex text-base font-semibold leading-7 text-gray-900 uppercase">
                                <GiClothes className="text-primario-700 h-6 w-6 mr-2"/> <p>Productos</p>
                            </Menu.Button>
                        </div>
                        <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className=" w-56 origin-top-right divide-y divide-gray-400 rounded-md bg-transparent shadow-lg ring-2 ring-black ring-opacity-10 focus:outline-none">
                                {categorias.map((ropa)=>{
                                        return(
                                            <div key={ropa.key} className="px-1 py-1 ">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <NavLink to={`/category/${ropa.nombre}`}>
                                                            <button
                                                                onClick={() => setMobileMenuOpen(false)}
                                                                className={`${
                                                                active ? 'bg-primario-500 text-white' : 'text-gray-900'
                                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm uppercase`}
                                                            >
                                                            {ropa.nombre}
                                                            </button>
                                                        </NavLink>
                                                        
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        )
                                    })}
                            </Menu.Items>
                        </Transition>
                    </Menu>

                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <input className=" rounded-full block w-60 bg-gray-300 py-4 pl-4 pr-12 text-slate-900 placeholder:text-slate-600 sm:text-sm sm:leading-6" placeholder="Buscar..." aria-label="Buscar ropa" type="text" onChange={handleChange}/>
                    </div>
                    <div className="py-6">
                        <a
                        href="#"
                        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                        >
                        Log in
                        </a>
                    </div>
                    </div>
                </div>
                </Dialog.Panel>
            </Dialog>
        </div>
        <hr className='border-gray-400'/>
    </header>
    )
}
