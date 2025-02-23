import React from 'react'
import image from '../../assets/hotelroom.webp'
import styles from './Secone.module.css'

const SectionOne = () => {
  return (
    <div className={styles.container}>
      <img src={image} alt="hotelroom" className={styles.image} />
    </div>
  )
}

export default SectionOne
