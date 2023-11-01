import styles from './product.module.scss'
import { Products } from '../../../database/products'
import { BsCartFill } from 'react-icons/bs'
import { IoIosAdd, IoIosRemove } from 'react-icons/io'
import { useState } from 'react'
import { ProductModal } from './productModal'

export const Product = ({name, src, price, lastprice, productImage, collection}) => {
    let fixedNumberPrice = price.toFixed(2).toString().replace(".",",")
    let fixedNumberLastPrice = lastprice.toFixed(2).toString().replace(".",",")
    let porcentage = ((lastprice - price) / price) * 100
    let showLastPrice = `R$${fixedNumberLastPrice}`

    let showPorcentage = `${porcentage.toFixed(0)}% de desconto`
    if(price >= lastprice || lastprice === null){
        showPorcentage = ``
        fixedNumberLastPrice = ``
    }
    porcentage = porcentage.toFixed(0)

    const [modal, setModal] = useState("disabled")
    const modalSwitch = (e) => {
        if(modal === "disabled"){
            setModal("activated")
        } else(
            setModal("disabled")
        )
    }

    return(
        <>
            <ProductModal name={name} collection={collection} image={productImage} modalSwitch={modalSwitch} modal={modal} />
            
            <div className={styles.product}>
                <div className={styles.product__margin}>
                    <img className={styles.product__image} src={productImage} alt="" />
                    <div className={styles.product__row1}>
                        <h1 className='product-font title'>
                            {name}
                        </h1>
                        <h1 className='product-font collection'>
                            {collection}
                        </h1>
                    </div>
                    <div className={styles.product__row2}>
                        <span className='product-font price'>
                            R${fixedNumberPrice}
                        </span>
                        <div className={styles.product__row2__col2}>
                            <span className='product-font offer'>
                                {showPorcentage}
                            </span>
                            <span className='product-font lastprice'>
                                {showLastPrice}
                            </span>
                        </div>
                    </div>
                    <div className={styles.cart}>
                        <button className={styles.buttonCart} onClick={modalSwitch}>
                            Adicionar ao carrinho <BsCartFill />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
