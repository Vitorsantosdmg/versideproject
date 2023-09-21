import styles from './style.module.scss';

export const RatingCard = ({name, testimony}) => {
    return(
        <div className={styles.ratingCard__container}>
            <div className={styles.ratingCard__user}>
                <h1>{name}</h1>
                <p>{testimony}</p>
            </div>
        </div>
    )
}