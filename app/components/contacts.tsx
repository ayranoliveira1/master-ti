"use client";

import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";
import { MdOutlineMail, MdOutlineTimer } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contacts = () => {
   return (
      <div className="flex flex-col items-center gap-5 lg:gap-10">
         <h1 className="lg:text-4xl text-xl font-bold lg:font-semibold">
            Contatos
         </h1>

         <div className="flex lg:flex-row flex-col gap-7 lg:gap-5 lg-gap-0 justify-center">
            <div className="flex flex-col gap-1 lg:gap-3 mx-auto lg:mx-0 lg:mr-20 items-center">
               <h1 className="text-base lg:text-3xl lg:mb-2 font-medium">
                  Fale Conosco!
               </h1>
               <span className="flex items-center gap-3 lg:text-sm text-xs">
                  <MdOutlineTimer size={25} />
                  8:00 AM - 18:00 PM
               </span>
               <span className="lg:text-sm text-xs flex items-center gap-3">
                  <FiPhone size={25} />
                  (91) 98543-4512
               </span>
               <span className="lg:text-sm text-xs flex items-center gap-3">
                  <MdOutlineMail size={25} />
                  CONTATO: mastertibr091@gmail.com
               </span>
               <Link
                  href={
                     "https://api.whatsapp.com/send?phone=+55(91)982534512&text=Olá%2C+gostaria+de+conhecer+mais+o+trabalho+de+sites+de+vocês!"
                  }
                  target="_blank"
               >
                  <Button className="flex items-center gap-1 w-fit rounded-3xl lg:text-sm text-xs bg-black">
                     <FaWhatsapp size={15} />
                     Quero fazer meu site
                  </Button>
               </Link>
            </div>

            <div className="flex flex-col gap-1 mx-auto lg:mx-0 items-center">
               <h1 className="lg:text-3xl text-base font-medium">
                  Mande um E-mail <br /> Para Nossa Equipe!
               </h1>

               <p className="text-gray-400 text-xs lg:text-sm">
                  Ajude nossa equipe a melhorar br o <br /> feedback, mande seu
                  e-mail para ser <br /> melhor atendido da melhor forma, <br />
                  respondemos em menos de 24 horas!
               </p>

               <form
                  action={"https://formsubmit.co/mastertibr091@gmail.com"}
                  method="POST"
                  className="flex flex-col gap-3 mt-3"
               >
                  <Input
                     className="bg-black border-[#292734] text-white"
                     placeholder="Digite seu nome..."
                     name="name"
                     required
                  />

                  <Input
                     className="bg-black border-[#292734] text-white"
                     placeholder="Digite seu Email..."
                     name="email"
                     required
                  />

                  <Textarea
                     className="bg-black border-[#292734] text-white"
                     placeholder="Escreva sua Mensagem..."
                     name="message"
                     required
                  />

                  <Button
                     type="submit"
                     className="bg-black border-[#292734] text-white"
                  >
                     Enviar
                  </Button>

                  <input
                     className="hidden"
                     type="text"
                     name="_subject"
                     value="new contact!"
                     onChange={(e) => console.log(e.target.value)}
                  />
                  <input
                     type="text"
                     name="_honey"
                     style={{ display: "none" }}
                  />
                  <input className="hidden" type="text" name="_captcha" />
               </form>
            </div>
            <div></div>
         </div>
      </div>
   );
};

export default Contacts;
