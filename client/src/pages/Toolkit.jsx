import React from 'react'
import styles from '../style'
import CardOthers from '../components/CardOthers'
import CardUser from '../components/CardUser'
import AppbarTwo from '../components/AppbarTwo'


const Toolkit = () => {

  return (

    <div className='bg-primary w-full'>

    <div>
      <AppbarTwo/>
      </div>
      
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
         <CardUser/>
        </div>
      </div> 
      
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
         <CardOthers/>
        </div>
      </div>

    </div>
  )
}

export default Toolkit