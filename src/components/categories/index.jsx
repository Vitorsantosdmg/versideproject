
import { SelectGender } from './gender';
import styles from './style.module.scss';

export const CategoriesComponent = () => {
    return(
        <div className={styles.categories}>
            <div className={styles.categories__container}>
               <div className={styles.categories__select}>
                    <SelectGender />

               </div>
            </div>
        </div>
    )
}