import { Button1 } from '../buttons/button-1'
import { HeaderAnchors } from '../buttons/headerAnchors'
import styles from './header.module.scss'

export const HeaderComponent = () => {
    return(
        <header>
            <div className={styles.header__logo}></div>
            <div className={styles.header__anchors}>
                <HeaderAnchors content={"Home"} target={"_blank"} link={"https://www.youtube.com"}/>
                <HeaderAnchors content={"Contato"} target={"_blank"} link={"https://www.youtube.com"}/>
                <HeaderAnchors content={"Categorias"} target={"_blank"} link={"https://www.youtube.com"}/>
            </div>
            <div className={styles.header__buttonsRight}>
                <Button1 content="Login"/>
                <Button1 content="Cadastro"/>
            </div>
        </header>
    )
}