import { useState } from 'react'
import CodeSvg from '../svg/cardproyect/CodeSvg'
import PreviewSVG from '../svg/cardproyect/Preview'
import Link from 'next/link'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

function ProyectCard({data}) {
  const { resume, tUsedText, techUsed, codeLink, hostedLink, allImages } = data

  const [indexSlide, setindexSlide] = useState(0)
  
  const prevSlideMove = () => {
    const nxt = indexSlide === 0 ? allImages.length -1 : indexSlide - 1;
    setindexSlide(nxt);
  }

  const nextSlideMove = () => {
    const lst = indexSlide === allImages.length -1 ? 0 : indexSlide + 1;
    setindexSlide(lst);
  }

  return (
    <>
      <div className="w-full h-full lg:flex bg-neutral-700 text-gray-300">
      <div className="w-full lg:w-1/2 h-full object-cover group">
        <div className='relative'>
         <img src={`${allImages[indexSlide].url}`} alt="" className='w-full h-full rounded-lg duration-100 transition-all ease-in-out'/>
         <div className='hidden group-hover:block absolute top-[50%] left-0 text-2xl -translate-x-0 translate-y-[-50%] cursor-pointer bg-black/20 text-white rounded-full'>
          <BsChevronCompactLeft onClick={prevSlideMove} size={30}/>
          </div>
         <div className='hidden group-hover:block absolute top-[50%] right-0 text-2xl -translate-x-0 translate-y-[-50%] cursor-pointer bg-black/20 text-white rounded-full'>
          <BsChevronCompactRight onClick={nextSlideMove} size={30}/>
          </div>
        </div>
         {/* <div style={{backgroundImage: `url(${allImages[0]})`}} className='w-full h-full rounded-lg bg-center bg-cover'></div> */}
        {/* <!-- video de referencia al proyecto --> */}
      </div>
      <div className="lg:w-1/2 p-5">
        <h1>
          {resume}
        </h1>
        <div className="pt-2">
          <hr />
        </div>
        <div className="pt-3">
          <h1>{tUsedText}</h1>
          <div className="flex space-x-3 pt-2">
            {/* <!-- faltan los boton links con los iconos github telegram y linkedIn--> */}
            {techUsed.map((e, i) => (
               <div key={i}>
                <p>
                   {e}
                </p>
                 </div>

              ))
              }
           
          </div>
        </div>
        <div className="pt-2">
          <hr />
        </div>
        <div className='w-full flex space-x-4 items-end justify-end pr-5 pt-3'>
            <Link href={codeLink} className="hover:scale-125 transition-all ease-in-out duration-200">
               <CodeSvg />
            </Link>
            <Link href={hostedLink} className="hover:scale-125 transition-all ease-in-out duration-200">
              <PreviewSVG />
            </Link>
        </div>
      </div>
      <div></div>
    </div>
    </>
  )
}

export default ProyectCard