"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCircle, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
   return (
      <header className="flex justify-between items-center">
         {/* Mobile */}
         <div className="flex lg:hidden gap-5 items-center">
            <Image
               src={"/LogoMaster.png"}
               alt="Logo"
               width={50}
               height={50}
               className="object-cotain"
            />
            <p className="font-bold text-xs">
               Transformando <br /> Seu Negocio!
            </p>
         </div>

         <div className="lg:hidden">
            <Sheet>
               <SheetTrigger>
                  <IoMenuSharp size={25} />
               </SheetTrigger>

               <SheetContent>
                  <div className="flex flex-col gap-2 font-medium items-end py-1">
                     <button className="text-lg px-3 py-1 rounded-full">
                        Inicio
                     </button>

                     <Link href={"#works"}>
                        <button className="text-lg px-3 py-1 rounded-full">
                           Trabalhos
                        </button>
                     </Link>

                     <Link href={"#questions"}>
                        <button className="text-lg px-3 py-1 rounded-full">
                           Dúvidas
                        </button>
                     </Link>

                     <Link href={"#contacts"}>
                        <button className="text-lg px-3 py-1 rounded-full">
                           Contatos
                        </button>
                     </Link>
                  </div>
               </SheetContent>
            </Sheet>
         </div>

         {/* Desktop */}

         <div className="hidden lg:flex gap-5 items-center">
            <Image
               src={"/LogoMaster.png"}
               alt="Logo"
               width={100}
               height={100}
               className="object-cotain"
            />
            <p className="font-bold">
               Transformando <br /> Seu Negocio!
            </p>
         </div>

         <div className="hidden lg:flex gap-2 font-medium px-5 py-1 ">
            <button className="hover:underline text-lg px-3 py-1 rounded-full">
               Inicio
            </button>

            <Link href={"#works"}>
               <button className="hover:underline text-lg px-3 py-1 rounded-full">
                  Trabalhos
               </button>
            </Link>

            <Link href={"#questions"}>
               <button className="hover:underline text-lg px-3 py-1 rounded-full">
                  Dúvidas
               </button>
            </Link>

            <Link href={"#contacts"}>
               <button className="hover:underline text-lg px-3 py-1 rounded-full">
                  Contatos
               </button>
            </Link>
         </div>

         <div className="hidden lg:flex gap-2 items-center">
            <div className="flex gap-1 items-center text-[#1FC704]">
               <FaCircle /> 100% online
            </div>

            <Link
               href={"https://www.instagram.com/master.tii/"}
               target="_blank"
            >
               <div className="bg-[#f3f1f1] p-2 rounded-full shadow-lg cursor-pointer hover:scale-110">
                  <FaInstagram size={22} />
               </div>
            </Link>

            <Link
               href={
                  "https://api.whatsapp.com/send?phone=+55(91)982534512&text=Olá%2C+gostaria+de+conhecer+mais+o+trabalho+de+sites+de+vocês!"
               }
               target="_blank"
            >
               <div className="bg-[#f3f1f1] p-2 rounded-full shadow-lg cursor-pointer hover:scale-110">
                  <FaWhatsapp size={22} />
               </div>
            </Link>

            <Link href={"mailto:mastertibr091@gmail.com"} target="_blank">
               <div className="bg-[#f3f1f1] p-2 rounded-full shadow-lg cursor-pointer hover:scale-110">
                  <MdOutlineMail size={24} />
               </div>
            </Link>
         </div>
      </header>
   );
};

export default Header;
