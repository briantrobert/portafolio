import Link from 'next/link'
import GithubIcon from '../svg/GithubSvg'
import LinkedInIcon from '../svg/LinkedInIcon'
import TelegramIcon from '../svg/TelegramIcon'


function CardContact({locale}) {
  return (
    <div className="w-full h-full lg:flex bg-neutral-400 rounded-2xl">
      <div className="w-full lg:w-1/2 h-64">

      </div>
      <div className="lg:w-1/2 p-3">
        <h1>
          {locale.contancName}<span className='font-semibold text-lg'>Briant Robert Mengana. </span>
          {locale.cardContactText}
        </h1>
        <div className='pt-1'>
          <hr />
        </div>
        <div className="pt-1">
          <div className='flex justify-end pt-3'>
            <button className="border text-gray-800 border-gray-600 hover:border-gray-800 py-1 px-1 rounded-lg mr-5 text-lg shadow-xl font-semibold hover:text-gray-800 hover:bg-orange-500 hover:scale-110 active:scale-95 transition-all ease-in-out duration-150">
              {locale.buttonDownloadCV}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardContact