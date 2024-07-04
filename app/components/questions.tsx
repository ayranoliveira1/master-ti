import { FaCircle } from "react-icons/fa";
import {
   Accordion,
   AccordionTrigger,
   AccordionContent,
   AccordionItem,
} from "./ui/accordion";
import Image from "next/image";

const Questions = () => {
   return (
      <div className="flex flex-col items-center gap-14">
         <h1 className="text-xl lg:text-4xl font-bold lg:font-semibold">
            Dúvidas frequentes
         </h1>

         <div className="relative">
            <Accordion
               type="single"
               collapsible
               className="text-white w-[310px] lg:w-[650px] bg-black z-50"
            >
               <AccordionItem value="item-1">
                  <AccordionTrigger className="px-2 lg:py-5 text-sm lg:text-2xl">
                     <div className="flex gap-3 items-center text-start">
                        <FaCircle size={10} />
                        Por que eu vou querer um website?
                     </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 border-t">
                     <p className="pt-3">
                        Presença online: Ter um website permite que o seu
                        negócio esteja presente online, onde seus clientes em
                        potencial podem encontrá-lo a qualquer momento,
                        independentemente da localização geográfica ou do fuso
                        horário.
                     </p>
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="item-2">
                  <AccordionTrigger className="px-2 lg:py-5 text-sm lg:text-2xl">
                     <div className="flex gap-3 items-center text-start">
                        <FaCircle size={10} />
                        Quanto custa para desenvolver um website?
                     </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 border-t">
                     <p className="pt-3">
                        O custo para desenvolver um website pode variar
                        amplamente, de $500 a mais de $2000, dependendo de
                        fatores como o tipo de website (básico, empresarial,
                        e-commerce, personalizado), a complexidade das
                        funcionalidades, o design e a personalização
                        necessários.
                     </p>
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="item-3">
                  <AccordionTrigger className="px-2 lg:py-5 text-sm lg:text-2xl text-start">
                     <div className="flex gap-3 items-center text-start">
                        <FaCircle size={10} />
                        <p className="lg:hidden">
                           Eu preciso ter conhecimento técnico para manter meu
                           website?
                        </p>
                        <p className="hidden lg:block">
                           Eu preciso ter conhecimento técnico para <br />
                           manter meu website?
                        </p>
                     </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 border-t">
                     <p className="pt-3">
                        Não é necessário ter conhecimento técnico avançado para
                        manter um website
                     </p>
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="item-4">
                  <AccordionTrigger className="px-2 lg:py-5 text-sm lg:text-2xl">
                     <div className="flex gap-3 items-center text-start">
                        <FaCircle size={10} />
                        Meu website precisará de manutenção regular?
                     </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 border-t">
                     <p className="pt-3">
                        Sim, seu website precisará de manutenção regular para
                        garantir segurança, desempenho e atualizações de
                        conteúdo. Isso inclui atualizações de software, backups,
                        correções de segurança e ajustes no design e
                        funcionalidades conforme necessário.
                     </p>
                  </AccordionContent>
               </AccordionItem>
            </Accordion>

            <Image
               src="/questions.png"
               width={200}
               height={200}
               alt="questions"
               className="absolute right-[-59px] top-[-180px] hidden lg:block"
            />
         </div>
      </div>
   );
};

export default Questions;
