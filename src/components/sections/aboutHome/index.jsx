import styles from './style.module.scss';


export const AboutHome = () => {
    return(
        <section className={styles.aboutHome}>
            <div className={styles.aboutHome__container}>
                <h1>Sobre nós</h1>
                <p>Nosso objetivo é nos tornarmos uma marca de moda reconhecida por oferecer roupas contemporâneas e sustentáveis, combinando design inovador com responsabilidade ambiental. Queremos inspirar a confiança e a autoexpressão em nossos clientes, tornando-nos uma escolha preferencial para aqueles que valorizam qualidade, estilo e consciência ecológica.</p>
            </div>
        </section>
    )
}