import React from 'react';
import styles from '../style';
import bias from '../assets/bias.png'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[70px] text-[50px] text-white ss:leading-[100px] leading-[75px]">
            Your Ultimate <br className="sm:block hidden"/>
            {" "}
            <span className="text-gradient"> Bias Buster</span>
            {" "}
            Tool
          </h1>
        </div>
        <p className={`${styles.paragraph}, max-w-[520px] mt-5`}>This platform aims to address unconscious biases in the recruitment process. 
        By providing tools and insights, it enables teams to detect and prevent biases, fostering inclusivity in the worklplace.</p>
      </div>

      <div>
        <img src={bias} alt="bias" className='w-[100%] h-[100%] relative z-[5]'/>
        <div className='absolute z-[0] w-[40%] h-[20%] top-0 pink__gradient'/>
        <div className='absolute z-[0] w-[60%] h-[60%] rounded-full bottom-40 white__gradient'/>
        <div className='absolute z-[0] w-[30%] h-[20%] right-40 bottom-40 pink__gradient'/>
      </div>

    </section>
  );
}

export default Hero;
