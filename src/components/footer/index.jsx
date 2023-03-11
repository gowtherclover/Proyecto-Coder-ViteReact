import Logo from '/assets/img/logo-malka.png'

import { SlSocialFacebook,SlSocialInstagram } from "react-icons/sl";
import { ImWhatsapp } from "react-icons/im";

export default function Footer(){

    return(
        <footer className="relative bg-white pt-8 pb-6">
            <hr className='border-gray-400 pt-4'/>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <img className="w-[100px] overflow-hidden shadow-md shadow-gray-500" src={Logo} alt="MALKA" />
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Encontranos en cualquiera de estas plataformas.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6">
                            <div className="flex">
                                <a href="#facebook" className="shadow-md shadow-gray-500 hover:shadow-blue-500 border-2 border-terciario-600 mx-4 rounded-full w-12 h-12 items-center flex justify-center"><SlSocialFacebook className='text-blue-400 p-1 font-normal h-8 w-8 items-center justify-center align-center outline-none focus:outline-none' type="button"/></a>
                                <a href="#insta" className="shadow-md shadow-gray-500 hover:shadow-rose-500 border-2 border-terciario-600 mx-4 rounded-full w-12 h-12 items-center flex justify-center"><SlSocialInstagram className='text-rose-600 p-1 font-normal h-8 w-8 items-center justify-center align-center outline-none focus:outline-none' type="button"/></a>
                                <a href="#wp" className="shadow-md shadow-gray-500 hover:shadow-green-500 border-2 border-terciario-600 mx-4 rounded-full w-12 h-12 items-center flex justify-center"><ImWhatsapp className='text-green-600 p-1 font-normal h-8 w-8 items-center justify-center align-center outline-none focus:outline-none' type="button"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-sm font-semibold mb-2">Otros Recursos</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Terminos &amp; Condiciones</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Politicas de Privacidad</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Contactanos</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300"/>
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                        Copyright © <span id="anio-actual">{`${(new Date).getFullYear()}`}</span><a href="#" target="_blank"/> MALKA by
                        <a href="#"> Aguilar Enzo</a>.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}