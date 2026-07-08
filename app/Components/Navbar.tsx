"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);


  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpenSubMenu(null);
  };


  return (

    <nav className="sticky top-0 z-50 w-full border-b bg-white">


      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">


        {/* Logo */}

        <Link href="/">
          <h1 className="text-2xl font-bold text-black">
            Zikks
          </h1>
        </Link>





        {/* Desktop */}

        <div className="hidden items-center gap-8 md:flex">


          <DesktopMenu
            title="What we do"
            items={[
              ["Digital Marketing","/digitalmarketing"],
              ["AI Solutions","/ai"],
              ["Custom App Development","/customapp"],
              ["Salesforce Services","/salesforce"],
            ]}
          />


          <DesktopMenu
            title="Who we are"
            items={[
              ["About Us","/about"],
              ["Our Team","/team"],
              ["FAQs","/faqs"],
            ]}
          />



          <DesktopMenu
            title="What we think"
            items={[
              ["Blog","/blog"],
              ["Insights","/insights"],
              ["Case Studies","/case-studies"],
            ]}
          />



          <Link
            href="/contact"
            className="rounded-md bg-[#0a2840] px-4 py-2 text-white"
          >
            Contact
          </Link>


        </div>





        {/* Mobile Icon */}

        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-black"
        >
          <Menu size={28}/>
        </button>


      </div>







      {/* Mobile Drawer */}

      {
        isOpen && (

          <>


            {/* Overlay */}

            <div
              className="fixed inset-0 bg-black/40 md:hidden"
              onClick={closeMobileMenu}
            />





            {/* Sidebar */}

            <div
              className="
              fixed right-0 top-0 z-50 
              h-full w-1/2 
              bg-white shadow-xl 
              md:hidden
              "
            >


              <div className="flex h-16 items-center justify-between border-b px-5">


                <h2 className="text-xl font-bold">
                  Zikks
                </h2>


                <button onClick={closeMobileMenu}>
                  <X size={28}/>
                </button>


              </div>





              <div className="flex flex-col gap-5 px-5 py-6">





                <MobileMenuItem
                  title="What we do"
                  id="what"
                  openSubMenu={openSubMenu}
                  setOpenSubMenu={setOpenSubMenu}
                  closeMobileMenu={closeMobileMenu}
                  items={[
                    ["Digital Marketing","/digitalmarketing"],
                    ["AI Solutions","/ai"],
                    ["Custom App Development","/customapp"],
                    ["Salesforce Services","/salesforce"],
                  ]}
                />





                <MobileMenuItem
                  title="Who we are"
                  id="who"
                  openSubMenu={openSubMenu}
                  setOpenSubMenu={setOpenSubMenu}
                  closeMobileMenu={closeMobileMenu}
                  items={[
                    ["About Us","/about"],
                    ["Our Team","/team"],
                    ["FAQs","/faqs"],
                  ]}
                />






                <MobileMenuItem
                  title="What we think"
                  id="think"
                  openSubMenu={openSubMenu}
                  setOpenSubMenu={setOpenSubMenu}
                  closeMobileMenu={closeMobileMenu}
                  items={[
                    ["Blog","/blog"],
                    ["Insights","/insights"],
                    ["Case Studies","/case-studies"],
                  ]}
                />





                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="rounded-md bg-[#0a2840] px-3 py-2 text-center text-white"
                >
                  Contact
                </Link>


              </div>


            </div>


          </>

        )
      }


    </nav>

  );

}








function DesktopMenu({
  title,
  items
}:any){

  return (

    <div className="group relative">


      <button
        className="flex items-center gap-1 text-black hover:text-indigo-600"
      >
        {title}
        <ChevronDown size={16}/>
      </button>



      <div className="absolute left-0 top-full hidden pt-4 group-hover:block">


        <div className="w-60 rounded-md bg-white p-3 shadow-lg">


          {
            items.map((item:any,index:number)=>(

              <Link
                key={index}
                href={item[1]}
                className="block rounded-md px-4 py-2 text-black hover:bg-gray-100"
              >
                {item[0]}
              </Link>

            ))
          }


        </div>


      </div>


    </div>

  );

}









function MobileMenuItem({
  title,
  id,
  items,
  openSubMenu,
  setOpenSubMenu,
  closeMobileMenu
}:any){


  return (

    <div>


      <button
        onClick={() =>
          setOpenSubMenu(
            openSubMenu === id
            ? null
            : id
          )
        }

        className="flex w-full justify-between text-black"
      >

        {title}


        <ChevronDown
          size={18}
          className={
            openSubMenu === id
            ? "rotate-180 transition"
            : "transition"
          }
        />


      </button>





      {
        openSubMenu === id && (

          <div className="ml-3 mt-3 flex flex-col gap-3">


            {
              items.map((item:any,index:number)=>(

                <Link
                  key={index}
                  href={item[1]}
                  onClick={closeMobileMenu}
                  className="text-sm text-gray-700"
                >
                  {item[0]}
                </Link>

              ))
            }


          </div>

        )
      }


    </div>

  );

}