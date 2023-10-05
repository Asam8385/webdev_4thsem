'use client';

import { motion } from 'framer-motion';

import styles from '../app';
import { navVariants } from '../utils/motion';
import Link from 'next/link';
import { MenuToggle } from './togglemenu';
import { useCycle } from 'framer-motion';
import { useRef } from 'react';




export default function Navbar(){

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  
  return(
  
  <motion.nav 
    variants={navVariants}
    initial={false}
    animate={isOpen ? "open" : "closed"}
    ref={containerRef}
    whileInView="show"
    className={`${styles.xPaddings} py-3 fixed top-0 w-[100vw] bg-white  z-[20]   `}
  >
    <div className="absolute w-[50%] inset-0 " />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
     
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <div className="flex gap-0">
  <span className="font-extrabold text-[24px] text-center  bg-black  text-white">
    ML
  </span>
  <span className="font-extrabold text-[24px] text-center  text-green-500 bg-white">
    LEARN
  </span>
</div>
      <MenuToggle toggle={() => toggleOpen()}/>
    </div>
  
  </motion.nav>
);

}

