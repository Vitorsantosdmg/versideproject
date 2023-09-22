import { SelectGender } from './selectGender';
import styles from './style.module.scss';

export const CategoriesComponent = () => {
    return(
        <div className={styles.categories}>
            <div className={styles.categories__container}>
                <SelectGender />
            </div>
        </div>
    )
}