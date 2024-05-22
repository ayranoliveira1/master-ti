import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";
import { MdOutlineMail, MdOutlineTimer } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contacts = () => {
   return (
      <div className="flex flex-col items-center gap-10">
         <h1 className="text-white text-3xl">Contatos</h1>

         <div className="flex jsustify-center">
            <div className="flex flex-col text-white gap-3 mr-20">
               <h1 className="text-white text-3xl mb-2 font-semibold">
                  Fale Conosco!
               </h1>
               <span className="flex items-center gap-3 text-sm">
                  <MdOutlineTimer size={25} />
                  8:00 AM - 18:00 PM
               </span>
               <span className="text-sm flex items-center gap-3">
                  <FiPhone size={25} />
                  (91) 98543-4512
               </span>
               <span className="text-sm flex items-center gap-3">
                  <MdOutlineMail size={25} />
                  CONTATO: mastertibr-091@gmail.com
               </span>
               <Link
                  href={
                     "https://api.whatsapp.com/send?phone=+55(91)982534512&text=Olá%2C+gostaria+de+conhecer+mais+o+trabalho+de+sites+de+vocês!"
                  }
                  target="_blank"
               >
                  <Button className="flex items-center gap-1 w-fit rounded-3xl text-sm bg-[#292734]">
                     <FaWhatsapp size={15} />
                     Quero fazer meu site
                  </Button>
               </Link>
            </div>

            <div className="flex flex-col gap-1">
               <h1 className="text-white text-3xl font-semibold">
                  Mande um E-mail <br /> Para Nossa Equipe!
               </h1>

               <p className="text-gray-400 text-sm">
                  Ajude nossa equipe a melhorar br o <br /> feedback, mande seu
                  e-mail para ser <br /> melhor atendido da melhor forma, <br />
                  respondemos em menos de 24 horas!
               </p>

               <div className="flex flex-col gap-3 mt-3">
                  <Input
                     className="bg-[#3B3B3B] border-[#292734] text-white"
                     placeholder="mastertibr-091@gmail.com"
                  />

                  <Input
                     className="bg-[#3B3B3B] border-[#292734] text-white"
                     placeholder="Digite seu Email..."
                  />

                  <Textarea
                     className="bg-[#3B3B3B] border-[#292734] text-white"
                     placeholder="Escreva sua Mensagem..."
                  />

                  <Button className="bg-[#292734] border-[#292734] text-white">
                     Enviar
                  </Button>
               </div>
            </div>
            <div></div>
         </div>
      </div>
   );
};

export default Contacts;
