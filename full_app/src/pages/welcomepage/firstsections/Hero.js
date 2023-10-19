
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from '../index';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../motion';

const Hero = () => (
  <section className={`${styles.yPaddings} mt-[90px] sm:pl-16 pl-6 sm:text-[100px]  bg-gradient-to-l `}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10 mb-[50px] mt-[60px]">
        <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} text-white`}>
          <span className='text-green-600'>machine intelligence</span> is the 
        </motion.h1>
        <motion.h1 variants={textVariant(1.3)} className={`${styles.heroHeading} text-white`}>
          <span className='text-red-900'>last</span>  invention that humanity 
        </motion.h1>
        <motion.h1 variants={textVariant(1.5)} className={`${styles.heroHeading} text-white`}>
           will <span className='text-white'>never</span>  need to make...
        </motion.h1>
       
      </div>

      <div className="flex justify-center items-center flex-row relative z-10 mb-[50px] mt-[40px]">
        <motion.h1 variants={textVariant(1.7)} className={`${styles.herotext} text-white `}>
          So start your machine learining journey here 
        </motion.h1>
      </div>

     

      <div className='flex flex-row  justify-center align-center '>
      <Link to="/signup"> 
      <motion.button variants={textVariant(1.9)} className=" flex flex-row text-[25px]  align-center  justify-center bg-white hover:bg-black text-black hover:text-white  border border-white-500 hover:border-transparent  rounded-full z-[10]">
         <span className='pl-[15px] pr-[15px]' >sign up</span>
      </motion.button>
      </Link>
      <Link to="/signin"> 
      <motion.button variants={textVariant(1.9)} className=" flex flex-row text-[25px]  align-center  justify-center bg-white hover:bg-black text-black hover:text-white  border border-white-500 hover:border-transparent ml-[15px]  rounded-full z-[10]">
         <span className='pl-[15px] pr-[15px]' >sign in</span>
      </motion.button>
      </Link>
      </div>
     <motion.div>

     </motion.div>
    </motion.div>
   
  </section>
);

export default Hero;
