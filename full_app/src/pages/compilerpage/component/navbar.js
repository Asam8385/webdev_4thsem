import React from "react";


export default function Nav()
{
    return (
      
        <nav
        className="relative flex w-full  flex-wrap items-center justify-between bg-gradient-to-r from-gray-900 to-gray-600  py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4 z-[20] sticky top-0">
        <div className="flex flex-row w-full   items-center justify-between px-3">
        <div className="ml-2 mr-3">
            <a class="text-xl text-neutral-800 dark:text-neutral-200" href="#"
              ><span className="font-extrabold text-[24px] text-center  bg-black  text-white">
              ML
            </span>
            <span className="font-extrabold text-[24px] text-center  text-green-500 bg-white">
              LEARN
            </span></a
            >
        </div>
        <nav className="w-full rounded-md " aria-label="breadcrumb">
            <ol className="list-reset ml-2 flex ">
              <li>
                <a
                  href="#"
                  className="text-white  transition duration-200 hover:text-yellow-200 hover:ease-in-out motion-reduce:transition-none dark:text-neutral-200"
                  >Menu</a
                >
              </li>
              <li>
                <span className="mx-2 text-neutral-500 dark:text-neutral-200"
                  >/</span
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-white transition duration-200 hover:text-yellow-200 hover:ease-in-out motion-reduce:transition-none dark:text-neutral-100"
                  >Numpy</a
                >
              </li>
              <li>
                <span className="mx-2 text-neutral-500 dark:text-neutral-200"
                  >/</span
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-white transition duration-200 hover:text-yellow-200 hover:ease-in-out motion-reduce:transition-none dark:text-neutral-200"
                  >string change</a
                >
              </li>
            </ol>
          </nav>
        </div>
          </nav>
    

    );
}