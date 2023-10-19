'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../firstcomponents';

import styles from '../index';
import { fadeIn, staggerContainer } from '../motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Machine learning" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-white"
      >
        <span className="font-extrabold text-yellow-900">Machine Learning</span> is a
  revolutionary field in the present and future, where you can explore the
  limitless possibilities of artificial intelligence. It allows you to
  experience the power of data-driven decision-making as if it were second
  nature, as it's the{' '}
  <span className="font-extrabold text-green-900">
    marvel of machine learning
  </span>{' '}
  today. Using advanced algorithms and data, you can easily delve into the
  world of machine learning, turning complex problems into manageable
  solutions. Let's{' '}
  <span className="font-extrabold text-green-900">explore</span> the wonders of
  machine learning by diving deeper.
      </motion.p>

    </motion.div>
  </section>
);

export default About;
