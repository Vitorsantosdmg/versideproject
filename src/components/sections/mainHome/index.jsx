import { Button2 } from "../../buttons/button-2";
import { AiOutlineArrowDown } from 'react-icons/ai'
import styles from "./mainHome.module.scss";
import { Logosymbol } from "../../../assets/img/Logosymbol";


export const MainHome = () => {
    return(
        <main>
            <img className={styles.main__shape} src="src\assets\img\shape4.png" />
            <div className={styles.main__containerGroup}>
                <div className={styles.container__title}>
                    <h1 className="title one">A lado da sua<br />melhor versão</h1>
                </div>
                <div className={styles.container__subtitle}>
                    <p className="title three">produtos ecológicamente sustentáveis</p>
                </div>
            </div>
        </main>
    )
}