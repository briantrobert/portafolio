


function CardContact({locale}) {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row bg-neutral-400 rounded-2xl">
      <div className="w-1/2 h-64">
       {/* the image goes here */}
      </div>
      <div className="sm:w-1/2 p-3">
        <h1 className='text-sm md:text-base'>
          {locale.contancName}<span className='font-semibold text-lg'>Briant Robert Mengana. </span>
          {locale.cardContactText}
        </h1>
         <hr className="border-gray-700"/>
         <div className="pt-4">
         <button className="text-gray-800 px-1 py-1 rounded-lg mr-5 text-lg shadow-2xl font-semibold hover:text-gray-800 hover:bg-orange-500 hover:scale-110 active:scale-95 transition-all ease-in-out duration-150">
              {locale.buttonDownloadCV}
          </button>
         </div>
      </div>
    </div>
  );
}

export default CardContact