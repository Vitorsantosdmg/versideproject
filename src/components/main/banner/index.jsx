import styles from './banner.module.scss';
import { motion } from 'framer-motion'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import image1 from '../../../assets/img/bannerimg1.jpg'
import image2 from '../../../assets/img/bannerimg2.jpg'

const images = [image1, image2]

export const MainBanner = () => {
    return(
      <>
          <div className={styles.container}>
            <div className={styles.slideshow}>
              <div className={styles.images} id='images'>
                <img src={images[0]} alt="slides" className={styles.slides} />
              </div>
              <button className={styles.prevButton}><AiOutlineArrowLeft /></button>
              <button className={styles.nextButton}><AiOutlineArrowRight /></button>
            </div>
          </div>
      </>
    )
}