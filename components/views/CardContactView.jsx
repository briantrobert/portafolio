import Link from 'next/link'
import GithubIcon from '../svg/GithubSvg'
import LinkedInIcon from '../svg/LinkedInIcon'
import TelegramIcon from '../svg/TelegramIcon'


function CardContact() {
  return (
    <div className="w-full h-full lg:flex bg-neutral-400 rounded-2xl">
      <div className="w-full lg:w-1/2 h-64">
     
      </div>
      <div className="lg:w-1/2 p-5">
        <h1>
          Hola mi nombre es Briant Robert Mengana, soy graduado de Ingeniería Informática en la
          Universidad de Oriente ,Santiago de Cuba, Cuba desde 2015 y hasta la actualidad siempre
          actualizado con los movimientos en torno al desarrollo para plataformas web y móviles.
          Actualmente soy desarrollador front-end en Reactjs y el framework para CSS MaterialUI en
          la empresa de Desarrollo de Software Desoft en Santiago de Cuba. Aunque mi perfil sea front-end ya he incursionado
          en perfiles fullstack usando Nextjs ,QraphQL, Prisma ,FastApi, algnos de los cuales los presento en este
          portafolio asi como el uso de Tailwindcss como framework CSS según las tendencias actuales.
        </h1>
        <div className="pt-2">
          <hr />
        </div>
        <div className="pt-3">
          <h1>Contáctame</h1>
          <div className="flex space-x-3 pt-2 pb-2">
            {/* <!-- faltan los boton links con los iconos github telegram y linkedIn--> */}
           
              <Link
                className="hover:scale-110 transition-all ease-in-out duration-200"
                href={"/"}
              >
                <GithubIcon />
              </Link>
              <Link
                className="hover:scale-110 transition-all ease-in-out duration-200"
                href={"/"}
              >
                <LinkedInIcon />
              </Link>
              <Link
                className="hover:scale-110 transition-all ease-in-out duration-200"
                href={"/"}
              >
                <TelegramIcon />
              </Link>
         
          </div>
          <hr/>
          <div className='flex justify-end pt-3'>
          <button className="border text-gray-800 border-gray-600 hover:border-gray-800 py-1 px-1 rounded-lg mr-5 text-lg shadow-xl font-semibold hover:text-gray-800 hover:bg-orange-500 hover:scale-110 active:scale-95 transition-all ease-in-out duration-150">
                  Descargar CV
                </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default CardContact