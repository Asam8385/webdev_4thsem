'use client';

import { motion } from 'framer-motion';

import styles from '../app/index';


import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} mt-[90px] sm:pl-16 pl-6  bg-gradient-to-l from-white to-blue-200`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
       <div className="flex flex-row jusify-center items-center">
        <motion.img className="w-[15vw]" variants={fadeIn('right','tween',0.4 , 1)} src="/numpy.png"/>
        <motion.img className="w-[15vw]" variants={fadeIn('left','tween',0.6 , 1)} src="/pandas.png"/>     
        <motion.img className="w-[15vw]" variants={fadeIn('right','tween',0.8 , 1)} src="/keras.png"/>                 
        <motion.img className="w-[15vw]" variants={fadeIn('left','tween',1 , 1)} src="/TensorFlow.png"/>                
        <motion.img className="w-[15vw]" variants={fadeIn('right','tween',1.2 , 1)} src="/scikit.png"/>
        <motion.img className="w-[15vw] h-[100px]" variants={fadeIn('left','tween',1.4 , 1)} src="/nltk.png"/>
          
      </div>
      <div className="flex justify-center items-center flex-col relative z-10 mb-[50px] mt-[60px]">
        <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} text-black`}>
          <span className='text-green-600'>machine intelligence</span> is the 
        </motion.h1>
        <motion.h1 variants={textVariant(1.3)} className={`${styles.heroHeading} text-black`}>
          <span className='text-red-900'>last</span>  invention that humanity 
        </motion.h1>
        <motion.h1 variants={textVariant(1.5)} className={`${styles.heroHeading} text-black`}>
           will <span className='text-white'>never</span>  need to make...
        </motion.h1>
       
      </div>

      <div className="flex justify-center items-center flex-row relative z-10 mb-[50px] mt-[40px]">
        <motion.h1 variants={textVariant(1.7)} className={`${styles.herotext} text-blue-900 `}>
          So start your machine learining journey here 
        </motion.h1>
      </div>

     

      <div className='flex justify-center align-center mb-[80px]'>
      <motion.button variants={textVariant(1.9)} className="bg-white hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded-full z-[10]">
          sign in 
      </motion.button>
      </div>
     <motion.div>

     </motion.div>
    </motion.div>
   
  </section>
);

export default Hero;
