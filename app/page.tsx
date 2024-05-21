import Header from "@/components/header";
import Start from "@/components/start";
import Works from "@/components/works";

export default function Home() {
   return (
      <>
         <div className="py-5 container px-20">
            <Header />
         </div>

         <div className="py-10 container px-20">
            <Start />
         </div>

         <div id="works" className="py-14 container px-20">
            <Works />
         </div>
      </>
   );
}
