import './main.scss';
import styles from './main.module.scss'
import { MainBanner } from './banner';

export const Main = () => {
    return(
        <main className='home__main'>
            <div className={styles.container} id='main__container'>
                <MainBanner />
            </div>
        </main>
    )
}