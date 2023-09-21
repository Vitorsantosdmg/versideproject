import { RatingCard } from './ratingCard'
import styles from './style.module.scss'

export const RatingSection = () => {
    return(
        <>
            <h1>Depoimentos</h1>
            <div className={styles.ratingSection}>
                <RatingCard />
                <RatingCard />
                <RatingCard />
            </div>
        </>
    )
}