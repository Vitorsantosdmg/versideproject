import styles from './categoryButton.module.scss';

export const CategoryButton = ({buttonName, icon, value, name, id, type, checked}) => {
    return(
        
            
            <div className={styles.CategoryButton}>
                <input type={type} name={name} id={id} value={value} defaultChecked={checked}/>
                <span>{icon} {buttonName}</span>
                <div className={styles.view__checked}></div>
            </div>
            
       
    )
}