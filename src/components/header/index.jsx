import { Button1 } from '../buttons/button-1'
import { HeaderAnchors } from '../buttons/headerAnchors'
import styles from './header.module.scss'

export const HeaderComponent = () => {
    return(
        <header>
            <div className={styles.header__logo}></div>
            
            <div className={styles.header__buttonsRight}>
                <Button1 content="Login"/>
                <Button1 content="Cadastro"/>
            </div>
        </header>
    )
}