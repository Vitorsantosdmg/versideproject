import './main.scss';
import styles from './main.module.scss'

export const Main = () => {
    return(
        <main className='home__main'>
            
            <div className={styles.gallery__container}>
                <div className={styles.contain} id='contain1'>
                    <button className={styles.category__button}>Acessar categoria</button>
                </div>
                <div className={styles.contain} id='contain2'>
                    <button className={styles.category__button}>Acessar categoria</button>
                </div>
            </div>
        </main>
    )
}