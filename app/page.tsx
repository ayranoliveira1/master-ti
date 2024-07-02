import CardDesigner from "@/app/components/card-designer";
import CardSites from "@/app/components/card-site";
import Contacts from "@/app/components/contacts";
import Header from "@/app/components/header";
import Questions from "@/app/components/questions";
import Start from "@/app/components/start";

export default function Home() {
   return (
      <>
         <div className="py-5 container mx-auto">
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

         <div id="contacts" className="py-14 container px-20">
            <Contacts />
         </div>
      </>
   );
}
