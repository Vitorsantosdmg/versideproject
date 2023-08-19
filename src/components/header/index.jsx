import { HeaderAnchors } from '../buttons/headerAnchors'
import styles from './header.module.scss'

export const HeaderComponent = () => {
    return(
        <header>
            <div className={styles.header__logo}></div>
            <div className={styles.header__anchors}>
                <HeaderAnchors content={"Home"} target={"_blank"} link={"https://www.youtube.com"}/>
                <HeaderAnchors content={"Categorias"} target={"_blank"} link={"https://www.youtube.com"}/>
            </div>
        </header>
    )
}