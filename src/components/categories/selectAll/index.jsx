import styles from './button.module.scss'

export const SelectAll = ({buttonName, icon}) => {
    return(
        <button className={styles.categories__selectAll}>
            <span>{icon} {buttonName}</span>
        </button>
    )
}