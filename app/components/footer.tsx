import Image from "next/image";

const Footer = () => {
   return (
      <footer className="lgpx-36 py-5">
         <div className="container mx-auto flex gap-5 justify-between items-center">
            <div className="flex gap-5 items-center">
               {/* Mobile */}
               <Image
                  src="/LogoMaster.png"
                  alt="logo"
                  width={40}
                  height={40}
                  className="object-cover lg:hidden"
               />

               {/* Desktop */}
               <Image
                  src="/LogoMaster.png"
                  alt="logo"
                  width={60}
                  height={60}
                  className="object-cover hidden lg:block"
               />
               <p className="lg:text-sm text-[6px]">
                  © 2024 Master TI, Todos os Direitos Reservados
               </p>
            </div>
            <p className="lg:text-sm text-[6px]">
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
      </footer>
   );
};

export default Footer;
