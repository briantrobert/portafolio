import React from 'react'
import TypingText from '../hooks/TypingText'


function PortFolioView() {
  return (
    <div id='portfolio' className="pt-5 pb-5">
        <div className="pb-10 flex items-center justify-center">
          <h1 className="font-bold text-3xl text-gray-300"></h1>
        </div>
        <div className="flex items-center justify-center">
          <TypingText text="Portafolio" styleText="font-bold text-3xl text-gray-300 flex items-center justify-center"/>
        </div>
        <div className="flex items-start flex-col justify-start mt-10">
          <div className=" pt-5 ml-5 mr-5 pl-5 pr-5 pb-4">
            <div className="bg-slate-800 text-gray-300 rounded-2xl w-full lg:flex p-5">
              <div className="bg-gray-500 rounded-lg w-full lg:w-1/2 flex items-center justify-center h-64">
                hello image
              </div>
              <div className="lg:w-1/2 pl-4 pt-3">
                <p>
                  Proyecto realizado para desarrollar los conocimientos acerca
                  del manejo de formularios desde los mas básicos como los login
                  hasta los mas complejos teniendo en cuenta los tipos de campos
                  como por ejemplos de tipo select, checkbox time, datetime etc.
                  Se utilizaron librerias como React Hook Form para el manejo de
                  los formularios y la lubreria YUP para las validaciones.
                </p>
                <button
                  className="mt-6 bg-orange-500 text-gray-800 text-md font-semibold shadow-2xl 
                      py-2 px-3 rounded-xl hover:scale-110 transition-all ease-in-out duration-200 active:scale-100"
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>
          <div className=" mt-6 ml-5 mr-5 pl-5 pr-5 pb-4">
            <div className="bg-slate-800 text-gray-300 rounded-2xl w-full lg:flex lg:flex-row-reverse p-5">
              <div className="bg-gray-500 rounded-lg w-full lg:w-1/2 flex items-center justify-center h-64">
                hello image
              </div>
              <div className="lg:w-1/2 pl-4 pt-3">
                <p>
                  Proyecto realizado para desarrollar los conocimientos acerca
                  del manejo de formularios desde los mas básicos como los login
                  hasta los mas complejos teniendo en cuenta los tipos de campos
                  como por ejemplos de tipo select, checkbox time, datetime etc.
                  Se utilizaron librerias como React Hook Form para el manejo de
                  los formularios y la lubreria YUP para las validaciones.
                </p>
                <button className="mt-6 bg-orange-500 text-gray-800 text-md font-semibold shadow-2xl py-2 px-3 rounded-xl hover:scale-110 transition-all ease-in-out duration-200 active:scale-100">
                  Ver más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default PortFolioView