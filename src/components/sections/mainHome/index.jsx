import { Button2 } from "../../buttons/button-2";
import styles from "./mainHome.module.scss";


export const MainHome = () => {
    return(
        <main>
            <div className={styles.mainHome__title}>
                <h1>Conheça a sua melhor versão</h1>
                <Button2 classIcon="material-symbols-outlined" icon="arrow_downward" content="Confira nossos produtos" />
            </div>
            <div className={styles.mainHome__person}></div> 
        </main>
    )
}