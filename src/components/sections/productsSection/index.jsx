import { Product } from './products';
import { AiOutlineArrowRight } from 'react-icons/ai';
import styles from './products.module.scss'

export const ProductsSection = () => {
    return(
        <>
            <section className={styles.productsSection}>
                <div className={styles.productSection}>
                    <div className={styles.productSection__container__title}>
                        <h1 className='title two'>T-shirts</h1>
                        <span>Ver categoria <AiOutlineArrowRight /> </span>
                    </div>
                    <div className={styles.productSection__products}>

                    </div>
                </div>
            </section>
        </>
    )
}