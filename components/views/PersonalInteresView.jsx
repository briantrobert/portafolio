import { useState } from "react"
import TypingText from "../hooks/TypingText"
import AugmentedRealSvg from "../svg/about/AugmentedRealitySvg"
import BlenderSvg from "../svg/about/BlenderSvg"
import GymSvg from "../svg/about/GymSvg"
import PlantSvg from "../svg/about/PlantsSvg"
import {RxDotFilled} from 'react-icons/rx';
import ProfileSvg from "../svg/about/ProfileSvg"
import GraduatedSvg from "../svg/about/GraduatedSvg"
import BalanceSvg from "../svg/about/BalanceSvg"

const personalDataEn = [
  {
  title: "Graduated",
  text: `Hello my name is Briant Robert Mengana.
         I am a graduate of Computer Engineering at the Universidad
         de Oriente, Santiago de Cuba, Cuba since 2015.`,
  icon: <GraduatedSvg />
},{
  title: "Profile",
  text: `I am currently a front-end developer on Reactjs and the
         MaterialUI CSS framework at the Desoft Software
         Development company in Santiago de Cuba.`,
  icon: <ProfileSvg />
},{
  title: "Studies",
  text: `Although my profile is front-end, I have already dabbled in
         fullstack profiles using Nextjs ,QraphQL, Prisma ,FastApi,
         some of which I present in this portfolio as well as the use
         of Tailwindcss as a CSS framework according to current
         trends.`,
  icon: <BalanceSvg />
}
]

const personalDataEs = [
  {
  title: "Graduado",
  text: `Hola mi nombre es Briant Robert Mengana.
  Soy graduado de Ingeniería Informática en la
  Universidad de Oriente ,Santiago de Cuba, Cuba desde 2015.`,
  icon: <GraduatedSvg />
},{
  title: "Perfil",
  text: `Actualmente soy desarrollador front-end en Reactjs y el 
  framework para CSS MaterialUI en la empresa de Desarrollo de 
  Software Desoft en Santiago de Cuba.`,
  icon: <ProfileSvg />
},{
  title: "Estudios",
  text: `Aunque mi perfil sea front-end ya he incursionado
  en perfiles fullstack usando Nextjs ,QraphQL, Prisma ,FastApi, algnos de los cuales los presento en este
  portafolio asi como el uso de Tailwindcss como framework CSS según las tendencias actuales.`,
  icon: <BalanceSvg />
}
]

const personalDataMoreEs = [
 {
  title: "Mindfull",
  text: `Mantenerme física y mentalmente saludable con secciones de
         gimnasio o quizás escuchando buena música.`,
  icon: <GymSvg />
},{
  title: "Hobby",
  text: `Dedico parte de mi tiempo libre al cultivo y cuidado de
         plantas tanto medicinales como frutales, lo considero un
         buen método terapéutico.`,
  icon: <PlantSvg />
},{
  title: "Research",
  text: `La tecnología es un punto importante,me mantengo al tanto de
         los cambios y avances más recientes no solo en el desarrollo
         web sino también del desarrollo de aplicaciones móviles y la
         Realidad Aumentada.`,
  icon: <AugmentedRealSvg />
},{
  title: "Personal interest",
  text: `Siento gran interés el de desarrollo 3D
         como el uso de aplicaciones como Blender en el cual he podido desarrollar
         conocimientos acerca del diseño y la animación y asi aplicarlas a la web.`,
  icon: <BlenderSvg />
}
]

function PersonalInteresView({locale,internal}) {

  const ownLanguage = internal === "en" ? personalDataEn : personalDataEs;

   return (
    <div id="about">
      <div className="w-full flex items-center justify-center md:justify-start">
        <div className="flex items-center w-fit md:pl-14 justify-center flex-col pt-20">
          <TypingText
            text={locale.interest}
            styleText="font-semibold text-3xl text-gray-300 flex items-center justify-center"
          />
          <div className="w-full">
            <hr className="border-orange-400 border-2" />
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row pb-24">
        <div className="flex flex-col lg:w-1/2 items-start justify-center pt-5 md:pt-0">
          <div className="pr-14 md:pr-0 md:pl-8 md:pt-8 w-full transition-all duration-100 space-y-2">
           {
             ownLanguage.map((e, index) => (
             <div key={index} className="flex flex-col pl-2 pr-2 pt-1 pb-1 rounded-md">
              <div className="flex w-full space-x-3 items-start justify-between">
                <div className="bg-orange-500 h-12 w-14 rounded-sm flex items-center justify-center ml-2 mt-2 mr-2 pl-2 pr-2">
                  {e.icon}
                </div>
                <div className="text-gray-300 font-bold">
                  <h1>{e.title}</h1>
                  <p className="text-sm text-justify font-medium md:text-base">
                      {e.text}
                  </p>
                </div>
              </div>
            </div>
             ))
           } 
          </div>
          <div className="md:pl-16 pl-6 mt-8 w-full">
            <div className="flex items-center justify-between ">
              <a href="/files/CV.pdf" download="Resume">
              <button className="text-gray-800 p-2 bg-orange-500 rounded-lg mr-5 text-base shadow-2xl font-semibold hover:font-bold hover:text-gray-800 hover:bg-orange-500 hover:scale-110 active:scale-95 transition-all ease-in-out duration-150">
                {locale.buttonDownloadCV}
              </button>
              </a>
              <a href="#contact_me">
                <button className="text-gray-800 p-2 bg-orange-500 rounded-lg mr-5 text-base shadow-2xl font-semibold hover:font-bold hover:text-gray-800 hover:bg-orange-500 hover:scale-110 active:scale-95 transition-all ease-in-out duration-150">
                  {locale.contactMe}
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex lg:w-1/2 w-full h-full items-center justify-center mt-5">
          <div className="h-full w-full flex items-center justify-center">
            <div className="overflow-hidden md:rounded-2xl rounded-full shadow-2xl border-2 border-blue-800 shadow-blue-600">
              <img
                className="w-56 h-64 md:w-72 md:h-96"
                src="/img/portafolio4use.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInteresView
