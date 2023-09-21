import styles from './style.module.scss';
import { RatingSection } from './ratingSection'

export const AboutHome = () => {
    return(
        <section className={styles.aboutHome}>
            <RatingSection />
        </section>
    )
}