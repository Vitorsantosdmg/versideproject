import styles from './banner.module.scss'
import image1_G from '../../assets/img/banner1_G.jpg'
import image1_M from '../../assets/img/banner1_M.jpg'
import image1_P from '../../assets/img/banner1_P.jpg'
import { motion } from 'framer-motion'


export const BannerHome = () => {
    return(
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition:{
            duration: .5,
            delay: .2
        }}} className={styles.banner} id='banner__home'>
            <picture>
                <source media="(max-width: 700px )" srcset={image1_P} type="image/jpg" />
                <source media="(max-width: 1200px )" srcset={image1_M} type="image/jpg" />
                <img src={image1_G} alt="" />
            </picture>
        </motion.div>
    )
}