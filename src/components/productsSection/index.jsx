import styles from './styles.module.scss'
import { Products } from '../../database/products'
import { Product } from './product'
import imagem from '../../assets/img/contain1.jpg'
import { motion } from 'framer-motion'
export const ProductSection = () => {
    return(
        <>
            <motion.section className={styles.productSection} id='productSection'>
                <div className={styles.category}>
                    <div className={styles.category__container}>
                        <h1 className='product-font title category'>Products</h1>
                        <div className={styles.container}>
                            {Products.map(item =>
                            <Product key={item.id}
                            name={item.name}
                            src={imagem}
                            price={item.price}
                            lastprice={item.lastprice}
                            productImage={item.productImage}
                            collection={item.collection}
                            />)}
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}