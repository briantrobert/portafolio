import React from 'react'
import TypingText from '../hooks/TypingText'
import PortafolioCard from './PortafolioCard'
import {dataProyectEs,dataProyectEn} from '../data/dataOfProyects'

function PortFolioView({locale, portFolioSecc}) {

  const dataProyect = locale === "en" ? dataProyectEn : dataProyectEs;

  return (
    <div id='portfolio' className="pt-5 pb-5">
      <div className="pb-10 flex items-center justify-center">
        <h1 className="font-bold text-3xl text-gray-300"></h1>
      </div>
      <div className="flex items-center justify-center pb-16 mb-3">
        <TypingText text={portFolioSecc} styleText="font-bold text-3xl text-gray-300 flex items-center justify-center" />
      </div>
      <div className='lg:flex flex-col items-center space-y-20 lg:space-y-10'>
        {dataProyect.map((e) => (
          <PortafolioCard key={e.id} simple={e.simple} imgUrl={e.imgUrl} imgLeft={e.imgLeft} data={e}/>
        ))}
      </div>
    </div>
  )
}

export default PortFolioView