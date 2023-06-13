import React from 'react'
import styles from '../style'
import {Navbar, Hero, Feature, Testimonials} from '../components'
import { useLocation } from 'react-router-dom';

const Home = () => {
// let location = useLocation();
// console.log(location)

  return (
    <div className='bg-primary w-full'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div> 
      
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/> 
        </div>
      </div>

    {/* {location.hash==='features'? */}
      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Feature/> 
        </div>
      </div>
    {/* : null} */}

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Testimonials/>
        </div>
      </div>

    </div>
  )
}

export default Home