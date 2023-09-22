import styles from './style.module.scss';

export const SelectGender = () => {
    return(
            <>
                <div className={styles.selectGender}>
                    <button id='male' className={styles.gender}>
                        Masculino
                    </button>
                    <button id='female' className={styles.gender}>
                        Feminino
                    </button>
                </div>
            </>
    )
}