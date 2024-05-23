import Image from "next/image";

const Footer = () => {
   return (
      <div className="flex px-36 gap-5 py-5 justify-between items-center text-white bg-[#292734]">
         <div className="flex gap-5 items-center">
            <Image
               src="/logoMaster.png"
               alt="logo"
               width={60}
               height={60}
               className="object-cover"
            />
            <p className="text-sm">
               © 2024 Master TI, Todos os Direitos Reservados
            </p>
         </div>

         <p className="text-sm">
            Desenvolvido por{" "}
            <a
               className="hover:underline"
               href="https://www.linkedin.com/in/ayran-oliveira-258499291/"
               target="_blank"
            >
               Ayran
            </a>{" "}
            /{" "}
            <a
               className="hover:underline"
               href="https://www.linkedin.com/in/lucio-gabriel-6a9887276/"
               target="_blank"
            >
               Gabriel
            </a>
         </p>
      </div>
   );
};

export default Footer;
