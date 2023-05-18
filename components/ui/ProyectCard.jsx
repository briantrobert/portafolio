import Code from '../svg/CodeSvg'
import View from '../svg/ViewSvg'
import Link from 'next/link'

function ProyectCard({data}) {
  const { resume, tUsedText, techUsed } = data
  return (
    <>
      <div className="w-full h-full lg:flex bg-neutral-700 text-gray-300">
      <div className="w-full lg:w-1/2 h-64">
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
            <Link href={"/"} className="hover:scale-125 transition-all ease-in-out duration-200">
               <Code />
            </Link>
            <Link href={"/"} className="hover:scale-125 transition-all ease-in-out duration-200">
              <View />
            </Link>
        </div>
      </div>
      <div></div>
    </div>
    </>
  )
}

export default ProyectCard