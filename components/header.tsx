import { Instagram } from "lucide-react";
import Image from "next/image";
import { FaCircle, FaInstagram, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
   return (
      <header className="flex justify-between items-center">
         <div className="flex gap-2 items-center">
            <Image
               src={"/LogoMaster.png"}
               alt="Logo"
               width={100}
               height={100}
               className="object-cotain"
            />
            <p className="text-white">
               Transformando <br /> Seu Negocio!
            </p>
         </div>

         <div className="text-white flex gap-2 font-medium bg-[#292734] px-5 py-1 rounded-full">
            <button className="hover:bg-black px-3 py-1 rounded-full">
               Inicio
            </button>
            <button className="hover:bg-black px-3 py-1 rounded-full">
               Trabalhos
            </button>
            <button className="hover:bg-black px-3 py-1 rounded-full">
               Duvidas
            </button>
            <button className="hover:bg-black px-3 py-1 rounded-full">
               Contatos
            </button>
         </div>

         <div className="flex gap-3 items-center">
            <div className="flex gap-1 items-center text-[#1FC704]">
               <FaCircle /> 100% online
            </div>

            <div className="bg-[#292734] text-white p-2 rounded-full shadow-lg cursor-pointer hover:scale-110">
               <FaWhatsapp size={22} />
            </div>

            <div className="bg-[#292734] text-white p-2 rounded-full shadow-lg cursor-pointer hover:scale-110">
               <FaInstagram size={22} />
            </div>

            <div className="bg-[#292734] text-white p-2 rounded-full shadow-lg cursor-pointer hover:scale-110">
               <MdEmail size={22} />
            </div>
         </div>
      </header>
   );
};

export default Header;
