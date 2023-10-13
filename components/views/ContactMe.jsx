import { useState } from "react"
import TypingText from "../hooks/TypingText"
import { motion } from "framer-motion"
import { sendContatcForm } from "@/lib/api";
import Toast from "../ui/Toast";

function ContactMe({locale}) {

   const initValues = {
      name: "",
      email: "",
      message: ""
   }

   const initState = {values: initValues};

   const [state , setState] = useState(initState);
   const [openToast, setOpenToast] = useState(false);

   const {values, message ,error = false} = state;

   const handleChange = ({target}) => setState((prev) => ({
      ...prev,
      values: {
         ...prev.values,
         [target.name]: target.value,
      }
   }))

   const onSubmitForm = async(e) => {
      e.preventDefault();
      setState((prev) =>({
         ...prev,
         // isLoading: true
      }));

      try {
         
         await sendContatcForm(values);
         setState(initState);
         setState((prev) =>({
            ...prev,
            // isLoading: true
            message: "Correo enviado exitosamente.",
            error: false,
         }));
         setOpenToast(true);
      } catch (error) {
         setState((prev) =>({
            ...prev,
            // isLoading: true
            error: true,
            message: "No se pudo enviar el correo,verifique su conexión",
         }));
         console.log(error.message)
         setOpenToast(true);
      }
   }

   


  return (
    <div id="contact_me" className="h-full w-full pt-1">
      <div className='w-full flex items-center justify-center md:justify-start'>
        <div className='flex items-center w-fit pb-2 pt-14 md:pl-14 justify-center flex-col'>
          <TypingText text={locale.contactMe} styleText="font-semibold text-3xl text-gray-300 flex items-center justify-center" />
          <div className='w-full'>
            <hr className="border-orange-400 border-2" />
          </div>
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-center mb-10 text-gray-300">
      <div className="hidden w-1/2 md:flex">
         <div className="p-16 rounded-2xl w-full overflow-hidden">
            <img src="/img/contact_me.jpg" alt="" />
         </div>
      </div>
      <div className="flex justify-center items-center w-full md:w-1/2 lg:w-2/5 h-full">
         <div className="rounded-xl border-gray-500 shadow-2xl w-full">
            <div className="m-8">
               <form onSubmit={onSubmitForm}>
                 <div className="flex flex-col gap-1 w-full">
                    <label className="font-semibold text-lg">{locale.yourName} <span className="text-red-500">*</span></label>
                    <input className="py-2 rounded-lg px-1 mt-1 text-black" required type="text" name="name" value={values.name} onChange={handleChange} placeholder="Jhon Doe" />
                 </div>
                <div className="flex flex-col gap-1 pt-2">
                  <label className="font-semibold text-lg">{locale.yourEmail} <span className="text-red-500">*</span></label>
                  <input className="py-2 rounded-lg px-1 mt-1 text-black" type="email" required name="email" value={values.email} onChange={handleChange} placeholder="example@gmail.com"/>
               </div>
               <div className="flex flex-col gap-1 pt-2">
                  <label className="font-semibold text-lg">{locale.message} <span className="text-red-500">*</span></label>
                  <textarea className="py-2 rounded-lg px-1 mt-1 text-black" name="message" required value={values.message} onChange={handleChange} placeholder={locale.placeholderMessage}/>
               </div>
               <div className="flex justify-center items-center mt-10">
                  <button value="Send" 
                          type="submit"
                          className="py-2 bg-orange-600 text-gray-900 w-full rounded-xl text-lg transition-all ease-in-out font-semibold hover:scale-105 active:scale-95"
                          disabled={!values.name || !values.email || !values.message}
                          >{locale.buttomSend}</button>
               </div>
               </form>
            </div>
         </div>
      </div>
      </div>
      <Toast onOpen={openToast} error={error} message={message} closeToast={setOpenToast}/>
    </div>


  )
}

export default ContactMe
