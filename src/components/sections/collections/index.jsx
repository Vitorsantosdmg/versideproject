import styles from './style.module.scss';
import { FaRegEye } from 'react-icons/fa'

export const Collections = () => {
    return(
        <section className={styles.collections}>
            
            <div className={styles.gallery}>
                
                    <div className={styles.gallery__col}>
                        <div className={styles.gallery__img1}>
                            <div>
                                <span>Ver categoria</span><FaRegEye />
                            </div>
                        </div>
                        <div className={styles.gallery__img2}>
                            <div>
                                <span>Ver categoria</span><FaRegEye />
                            </div>
                        </div>
                    </div>
                    <div className={styles.gallery__col}>
                        <div className={styles.container__img3_img4}>
                            <div className={styles.gallery__img3}>
                                <div>
                                    <span>Ver categoria</span><FaRegEye />
                                </div>
                            </div>
                            <div className={styles.gallery__img4}>
                                <div>
                                    <span>Ver categoria</span><FaRegEye />
                                </div>
                            </div>
                        </div>
                        <div className={styles.gallery__img5}>
                            <div>
                                <span>Ver categoria</span><FaRegEye />
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}