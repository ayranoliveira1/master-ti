import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface CardItemProps {
   name: string;
   Imagem: string;
   link: string;
}

const CardItem = ({ name, Imagem, link }: CardItemProps) => {
   return (
      <div className="flex flex-col items-center gap-4">
         <div>
            <Image
               src={Imagem}
               alt="Barber Shop"
               width={700}
               height={700}
               className="object-cover shadow-full"
            />
         </div>

         <h1 className="lg:text-2xl text-lg text-black">{name}</h1>

         <Link href={link} target="_blank">
            <Button className="bg-black text-xs lg:text-md rounded-2xl">
               Acessar site
            </Button>
         </Link>
      </div>
   );
};

export default CardItem;
