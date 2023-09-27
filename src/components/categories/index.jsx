import styles from './categories.module.scss';
import { CategoryButton } from './categoryButton';
import { BsGenderFemale, BsGenderMale, BsSnow } from 'react-icons/bs';
import { RiTShirt2Line } from 'react-icons/ri';
import { PiPants } from 'react-icons/pi';
import { GiBilledCap } from 'react-icons/gi';
import { AiOutlineEye } from 'react-icons/ai'
import { SelectAll } from './selectAll';

export const CategoriesComponent = () => {
    return(
        <div className={styles.categories}>
            <div className={styles.categories__container}>
                <CategoryButton type="radio" buttonName="Masculino" icon={<BsGenderMale />} value="male" name="gender" checked="true"/>
                <CategoryButton type="radio" buttonName="Feminino" icon={<BsGenderFemale />} value="female" name="gender" />
                <CategoryButton type="radio" buttonName="Camisetas" icon={<RiTShirt2Line />} value="camiseta" name="category" />
                <CategoryButton type="radio" buttonName="Calças" icon={<PiPants />} value="calcas" name="category" />
                <CategoryButton type="radio" buttonName="Roupas de Inverno" icon={<BsSnow />} value="blusas" name="category" />
                <CategoryButton type="radio" buttonName="Bonés" icon={<GiBilledCap />} value="camiseta" name="category" />
                <SelectAll icon={<AiOutlineEye />} buttonName="Ver todas as Categorias"/>
            </div>
        </div>
    )
}