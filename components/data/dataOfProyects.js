import HtmlSvg from "../../components/svg/skillsection/HtmlSvg"
import CssSvg from "../../components/svg/skillsection/CssSvg"
import JavaScriptSvg from "../../components/svg/skillsection/JavaScriptSvg"
import GraphqlSvg from "../../components/svg/skillsection/GraphqlSvg"
import NextjsSvg from "../../components/svg/skillsection/NextjsSvg"
import TailwindcssSvg from '@/components/svg/skillsection/TailwindCssSvg'
import MongoDBSvg from "../svg/skillsection/MongoDBSvg"

const justData = [
      {
          id:1,
          imgUrl: "/img/proyect1/b1.jpg",
          allImages:[
             {
                  url:`/img/proyect1/b1.jpg`,
            },{
                  url:`/img/proyect1/b2.jpg`,
            },{
                  url:`/img/proyect1/b3.jpg`,
            },{
                  url:`/img/proyect1/b4.jpg`
            }
            ],
          techUsed: [<HtmlSvg itsMini/>,<JavaScriptSvg itsMini/>,<NextjsSvg itsMini/>,<TailwindcssSvg itsMini/>,<MongoDBSvg itsMini/>],
          codeLink :"https://github.com/briantrobert/nextjs_mongodb_crud/",
          hostedLink:"https://nextjs-mongodb-crud-five.vercel.app/",
      },
      {
            id:2,
            imgUrl: "/img/testPhoto.jpg",
            techUsed: [<HtmlSvg itsMini/>,<CssSvg itsMini/>,<JavaScriptSvg itsMini/>],
            codeLink :"/",
            hostedLink:"",
        },
        {
            id:3,
            imgUrl: "/img/testPhoto.jpg",
            techUsed: [<HtmlSvg itsMini/>,<CssSvg itsMini/>,<JavaScriptSvg itsMini/>],
            codeLink :"/",
            hostedLink:"",
        },
        {
            id:4,
            imgUrl: "/img/testPhoto.jpg",
            techUsed: [<HtmlSvg itsMini/>,<CssSvg itsMini/>,<JavaScriptSvg itsMini/>],
            codeLink :"/",
            hostedLink:"",
        },
]


const dataSimpleEs = {
      see: "Ver más",
      tUsedText:"Tecgnologías usadas",
}

const dataSimpleEn = {
      see: "See more",
      tUsedText:"Tech used",
}


export const dataProyectEs = [
  {
        id: 1,
        see: dataSimpleEs.see,
        imgUrl: justData[0].imgUrl,
        allImages: justData[0].allImages,
        cardTitle1:`Next.js CRUD con MongDB`,
        cardTitle2:`Tus Libros Favoritos....`,
        resume: `Proyecto realizado para desarrollar los conocimientos referentes
        a CREATE READ UPDATE DELETE(CRUD) usando tegnologías como MongoDB y su servicio en la nube
        MongoDB Atlas, fue realizado usando la ventaja de la carpeta API incluida en Nextjs. fue desplegada 
        en Vercel teniendo en cuenta la conexión al servicio online que brinda Mongo DB Atlas.`,
        tUsedText:"Tecgnologías usadas",
        techUsed: justData[0].techUsed,
        codeLink : justData[0].codeLink,
        hostedLink: justData[0].hostedLink,
  }
//   {
//         id: 2,
//         imgUrl: justData[1].imgUrl,
//         see: dataSimpleEs.see,
//        resume: `Proyecto realizado para desarrollar los conocimientos acerca,
//                  del manejo de los paneles de administración así como pantallas para 
//                  dar respuestas como soporte técnico de servicios,pantalla por la cual
//                  se manejan las quejas y sugerencias que tienen los clientes de una plataforma.Este
//                  panel de administración tambien permitiria visualizar los datos de formas distintas
//                  según desee el administrador de la aplicación...`,
//         tUsedText:"Tecgnologías usadas",
//         techUsed: justData[1].techUsed,
//         codeLink : justData[1].codeLink,
//         hostedLink: justData[1].hostedLink,
                 
//   }
//   {
//       id: 3,
//       techUsed: justData[2].imgUrl,
//       see: dataSimpleEs.see,
//       resume: `Proyecto realizado para desarrollar los conocimientos acerca,
//                   del manejo de formularios desde los mas básicos como los login
//                   hasta los mas complejos teniendo en cuenta los tipos de campos
//                   como por ejemplos de tipo select, checkbox time, datetime etc.
//                   Se utilizaron librerias como React Hook Form para el manejo de
//                   los formularios y la librería YUP para las validaciones.`,
//       tUsedText:"Tecgnologías usadas",         
//       techUsed: justData[2].techUsed,
//       codeLink : justData[2].codeLink,
//       hostedLink: justData[2].hostedLink,
               
// },
// {
//       id: 4,
//       techUsed: justData[3].imgUrl,
//       see: dataSimpleEs.see,
//       resume: `Proyecto realizado para desarrollar los conocimientos acerca
//                    del manejo de formularios desde los mas básicos como los login
//                    hasta los mas complejos teniendo en cuenta los tipos de campos
//                    como por ejemplos de tipo select, checkbox time, datetime etc.`,
//       tUsedText:"Tecgnologías usadas",
//       techUsed: justData[3].techUsed,
//       codeLink : justData[3].codeLink,
//       hostedLink: justData[3].hostedLink,
                   
//     }    
]

export const dataProyectEn = [
      {
            id: 1,
            see: dataSimpleEn.see,
            imgUrl: justData[0].imgUrl,
            allImages: justData[0].allImages,
            cardTitle1:`Next.js CRUD with MongDB`,
            cardTitle2:`Your Favorite Books....`,
            resume: `Project was created to develop knowledge about
            a CREATE READ UPDATE DELETE (CRUD) using technologies such as MongoDB and its cloud service
            MongoDB Atlas, was made using the advantage of the API folder included in Nextjs.Then was deployed
            in Vercel taking into account the connection to the online service provided by Mongo DB Atlas.`,
            tUsedText:"Tech used",
            techUsed: justData[0].techUsed,
            codeLink : justData[0].codeLink,
            hostedLink: justData[0].hostedLink,
      }
      // {
      //       id: 2,
      //       imgUrl: justData[1].imgUrl,
      //       see: dataSimpleEn.see,
      //       simple:`Proyecto realizado para desarrollar los conocimientos acerca del manejo de formularios`,
      //       resume: `Proyecto realizado para desarrollar los conocimientos acerca
      //                del manejo de formularios desde los mas básicos como los login
      //                hasta los mas complejos teniendo en cuenta los tipos de campos
      //                como por ejemplos de tipo select, checkbox time, datetime etc.
      //                Se utilizaron librerias como React Hook Form para el manejo de
      //                los formularios y la librería YUP para las validaciones.`,
      //       tUsedText:"Tech used",
      //       techUsed: justData[1].techUsed,
      //       codeLink : justData[1].codeLink,
      //       hostedLink: justData[1].hostedLink,
                     
      // }
//       {
//           id: 3,
//           techUsed: justData[2].imgUrl,
//           see: dataSimpleEn.see,
//           simple:`Proyecto realizado para desarrollar los conocimientos acerca del manejo de formularios`,
//           resume: `Proyecto realizado para desarrollar los conocimientos acerca
//                    del manejo de formularios desde los mas básicos como los login
//                    hasta los mas complejos teniendo en cuenta los tipos de campos
//                    como por ejemplos de tipo select, checkbox time, datetime etc.`,
//           tUsedText:"Tech used",
//           techUsed: justData[2].techUsed,
//           codeLink : justData[2].codeLink,
//           hostedLink: justData[2].hostedLink,
                   
//     },
//     {
//           id: 4,
//           techUsed: justData[3].imgUrl,
//           see: dataSimpleEn.see,
//           simple:`Proyecto realizado para desarrollar los conocimientos acerca del manejo de formularios`,
//           resume: `Proyecto realizado para desarrollar los conocimientos acerca
//                    del manejo de formularios desde los mas básicos como los login
//                    hasta los mas complejos teniendo en cuenta los tipos de campos
//                    como por ejemplos de tipo select, checkbox time, datetime etc.`,
//           tUsedText:"Tech used",
//           techUsed: justData[3].techUsed,
//           codeLink : justData[3].codeLink,
//           hostedLink: justData[3].hostedLink,
                   
//     }    
    ]