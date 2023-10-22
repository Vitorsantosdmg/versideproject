import styles from './footer.module.scss'

export const Footer = () => {
    return(
        <footer>
            <div className={styles.footer__container}>
            <div className={styles.footer__col}>
                    <ul>
                        <li>
                            <h2>Quem somos</h2>
                        </li>
                        <li>
                            <a href="">Sobre nós</a>
                        </li>
                        <li>
                            <a href="">Entrega</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h2>Contato</h2>
                        </li>
                        <li>
                            <span>+55 (43) 9 9999-9999</span>
                        </li>
                        <li>
                            <span>versidestore@gmail.com</span>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer__col}>
                    <ul>
                        <li>
                            <h2>Categorias</h2>
                        </li>
                        <li>
                            <a href="">Produtos em ofertas</a>
                        </li>
                        <li>
                            <a href="">T-shirts</a>
                        </li>
                        <li>
                            <a href="">Roupas de inverno</a>
                        </li>
                        <li>
                            <a href="">Calças moletom</a>
                        </li>
                    </ul>
                    
                </div>
                <div className={styles.footer__col}>
                    <ul>
                        <li>
                            <h2>Dúvidas</h2>
                        </li>
                        <li>
                            <a href="">
                                Reembolso e devoluções
                            </a>
                        </li>
                    </ul>
                    
                </div>
                <div className={styles.footer__col}>
                    <ul>
                        <li>
                            <h2>Verside Store</h2>
                        </li>
                        <li>
                            <span>
                                <a href="">Vitor Santos</a> -  CEO / Web designer / Designer gráfico
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}