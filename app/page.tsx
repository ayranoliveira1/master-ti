import CardDesigner from "@/app/components/card-designer";
import CardSites from "@/app/components/card-site";
import Contacts from "@/app/components/contacts";
import Header from "@/app/components/header";
import Questions from "@/app/components/questions";
import Start from "@/app/components/start";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
   return (
      <div className="relative">
         <div className="py-5 w-full lg:fixed top-0 px-8 lg:px-40 bg-white z-50 border-b border[0.2px]">
            <Header />
         </div>

         <div className="pb-10 pt-10 lg:pt-48 container px-1 lg:px-20">
            <Start />
         </div>

         <div id="works" className="py-14 container mx-auto">
            <CardSites />
         </div>

         <div className="py-14 container mx-auto">
            <CardDesigner />
         </div>

         <div id="questions" className="py-14 container mx-auto">
            <Questions />
         </div>

         <div id="contacts" className="py-14 container mx-auto">
            <Contacts />
         </div>

         <Link
            href={
               "https://api.whatsapp.com/send?phone=+55(91)982534512&text=Ol%C3%A1%2C+gostaria+de+conhecer+mais+o+trabalho+de+sites+de+voc%C3%AAs!"
            }
            target="_blank"
            className="fixed bottom-10 right-10 lg:bottom-20 lg:right-20 "
         >
            <div className="bg-[#e7e6e6] animate-bounce z-50 p-2 rounded-full shadow-lg cursor-pointer hover:scale-110">
               <FaWhatsapp size={30} className="lg:hidden" />
               <FaWhatsapp size={44} className="hidden lg:block" />
            </div>
         </Link>
      </div>
   );
}
