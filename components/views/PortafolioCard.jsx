import {useRef,useState, useEffect} from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ProyectCard from './ProyectCard';
import Modal from '../ui/Modal'
import useWindowSize from '../hooks/useWindowSize'
import MoreButton from '../ui/MoreButton'

function PortafolioCard({ data={} }) {

  const [showModal, setShowModal] = useState(false);
    
      return (
      <div className='h-full w-full flex items-center justify-center'>
          <div className="relative w-56 md:w-96 h-56 overflow-hidden bg-gray-200 rounded-lg group hover:cursor-pointer hover:-translate-y-3 transition-all ease-in-out duration-200">
            <div className="overflow-hidden w-full h-full">
              <img className="w-full h-full object-cover" src={data.imgUrl} alt="wherever" />
            </div>
            <div className="hidden group-hover:block transition-all absolute inset-0 z-20 w-full h-full backdrop-blur-sm bg-black/50 rounded-lg ease-in-out duration-200">
                <button className="w-full h-full flex items-center 
                        justify-center transition-all ease-in-out duration-200" 
                        onClick={() => setShowModal(true)}><h1 className="text-gray-50 font-bold text-2xl">
                          {data.see}
                  </h1></button>
            </div>
            <div className="absolute text-gray-50 font-bold bottom-0 bg-black/50 backdrop-blur-sm z-0 w-full flex flex-col pt-1 pl-5 space-y-1 pb-1">
              <div className="text-sm">
                <h2>Next.js CRUD with MongDB</h2>
              </div>
              <div className="text-xl pb-2">
                <h1>Favorite Books Store</h1>
              </div>
            </div>
          </div>  

        <Modal isVisibe={showModal} onClose={() => setShowModal(false)}>
          <ProyectCard data={data}/>
      </Modal>
      </div>
    );
  }

  export default PortafolioCard