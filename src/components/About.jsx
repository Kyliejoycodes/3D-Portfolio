/*import React from 'react';
import Tilt from 'react-tilt';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

const About = () => {
  return (
    <>
    <motion.div>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    </>
  )
}

export default About*/

import React from "react";
import {Tilt} from "react-tilt"
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full sunrise-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className='image'>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] parentofpicture'
      >

        Hi I’m Kylie. I am a Computer Engineering Student at the University of Waterloo, and the founder of Morgan Industry, the name behind multiple innovative Web Applications specializing in ethical technology education and awareness.<br></br> My life and business creed is to <b>improve the consumption of technologies,</b> in all forms, to <b>promote a mindful next generation.</b><br></br>
        My passions extrude beyond just technology development. I love anything automotive related, particularly working on projects restoring antique military vehicles, and preserving the history their story tells. I've enjoyed practicing shotokan karate for the past 12 years, and building video games and projects.  Most importantly getting my head out of my laptop to spend time with my family.

      </motion.p>
      <img className="shadow-card rounded-[400px]" id="picture" src="src/assets/company/bikepic.png"></img>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about")