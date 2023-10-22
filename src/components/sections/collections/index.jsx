import styles from './style.module.scss';

export const Collections = () => {
    return(
        <section className={styles.collections}>
            
            <div className={styles.gallery}>
                    <div className={styles.gallery__col}>
                        <div className={styles.gallery__img1}>

                        </div>
                        <div className={styles.gallery__img2}>

                        </div>
                    </div>
                    <div className={styles.gallery__col}>
                        <div className={styles.container__img3_img4}>
                            <div className={styles.gallery__img3}>
                            </div>
                            <div className={styles.gallery__img4}>
                            </div>
                        </div>
                        <div className={styles.gallery__img5}>

                        </div>
                    </div>
            </div>
        </section>
    )
}