import styles from './product.module.scss';

export const Product = ({ src, alt , productName , productDescription , productPrice }) => {
    return(
        <>
            <div className={styles.product}>
                <img src={src} alt={alt} />
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <span>{productPrice}</span>
            </div>
        </>
    )
}