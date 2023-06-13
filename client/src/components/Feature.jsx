import React from 'react'
import styles, {layout} from '../style'
import {useState} from 'react';
import { navLinks, features } from '../constants';
import Button from './Button';
// import TypingEffect from 'react-typing-effect';


const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>

      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );


const Feature = () =>  (
    <section id="features" className={`py-5 ${layout.section}`}>
        <div className={layout.sectionInfo}>
        <h2 className={styles.heading2} style={{ height: '4em' }}>
            Empowering Inclusivity in Talent Acquisition.
      </h2>
        <Button styles={`mt-5`} />

      </div>
  
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );

export default Feature