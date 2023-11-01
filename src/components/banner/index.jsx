import styles from './banner.module.scss'
import shape1 from '../../assets/img/shapebanner1.png'
import shape2 from '../../assets/img/shapebanner2.png'

import {motion,useScroll,useSpring,useTransform,MotionValue} from "framer-motion";
import Logo from '../../assets/img/LogomarcaV2.svg'

export const BannerHome = () => {

    return(
        <motion.div initial={{opacity: 1}} animate={{opacity: 1, transition:{
            duration: .2,
            delay: .2
        }}} className={styles.banner} id='banner__home'>
            <img className={styles.logomark} src={Logo} alt="" />
            <img className={styles.shape1} id='shape1' src={shape1} alt="" />
        </motion.div>
    )
}