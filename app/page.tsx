import Header from "@/components/header";
import Start from "@/components/start";

export default function Home() {
   return (
      <>
         <div className="py-5 container px-20">
            <Header />
         </div>

         <div className="py-5 container px-20">
            <Start />
         </div>
      </>
   );
}
