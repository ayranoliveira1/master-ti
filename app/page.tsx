import CardDesigner from "@/components/card-designer";
import CardSites from "@/components/card-site";
import Contacts from "@/components/contacts";
import Header from "@/components/header";
import Questions from "@/components/questions";
import Start from "@/components/start";

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
            <CardSites />
         </div>

         <div className="py-14 container px-20">
            <CardDesigner />
         </div>

         <div id="questions" className="py-14 container px-20">
            <Questions />
         </div>

         <div id="questions" className="py-14 container px-20">
            <Contacts />
         </div>
      </>
   );
}
