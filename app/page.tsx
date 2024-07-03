import CardDesigner from "@/app/components/card-designer";
import CardSites from "@/app/components/card-site";
import Contacts from "@/app/components/contacts";
import Header from "@/app/components/header";
import Questions from "@/app/components/questions";
import Start from "@/app/components/start";

export default function Home() {
   return (
      <>
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
      </>
   );
}
