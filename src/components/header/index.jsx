import './header.scss'
import { motion } from 'framer-motion'
import Logo from '../../assets/img/Logotipo.svg'

export const Header = () => {
    return(
        <header className='mainHeader'>
            <div className="header__container">
                <div className="header__logotypo">
                    <motion.img initial={{x: -50}} animate={{x: 0}} src={Logo} alt="Logotipo" />
                </div>
                <nav className='header__navigation'>
                    <motion.ul initial={{y: -50, opacity: 0}} animate={{y: 0,opacity: 1}}>
                        <li><a href="">Nav1</a></li>
                        <li><a href="">Nav2</a></li>
                        <li><a href="">Nav3</a></li>
                    </motion.ul>
                </nav>
                <motion.div initial={{x: 50}} animate={{x:0}} className='header__user'>
                    <button>Entrar</button>
                    <button>Cadastrar</button>
                </motion.div>
            </div>
        </header>
    )
}