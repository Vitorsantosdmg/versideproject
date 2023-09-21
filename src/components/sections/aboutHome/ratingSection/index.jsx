import { RatingCard } from './ratingCard'
import styles from './style.module.scss'

export const RatingSection = () => {
    return(
        <div className={styles.ratingSection}>
            <RatingCard />
            <RatingCard />
            <RatingCard />
        </div>
    )
}