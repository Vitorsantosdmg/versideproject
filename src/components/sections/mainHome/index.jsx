import { Button2 } from "../../buttons/button-2";
import { AiOutlineArrowDown } from 'react-icons/ai'
import styles from "./mainHome.module.scss";
import { Logosymbol } from "../../../assets/img/Logosymbol";


export const MainHome = () => {
    return(
        <main>
            <div className={styles.mainHome__title}>
                <div>
                    <Logosymbol />
                </div>
                <div>
                    <h1>Your better</h1>
                    <h1>version</h1>
                </div>
                
            </div>
            <div className={styles.mainHome__person}>
                
            </div> 
        </main>
    )
}