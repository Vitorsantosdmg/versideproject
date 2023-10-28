import './header.scss'
import { motion } from 'framer-motion'
import Logo from '../../assets/img/Logotipo.svg'

export const Header = () => {
    return(
        <header className='mainHeader'>
            <div className="header__container">
                <div className="header__logotypo">
                    <motion.img initial={{x: -50}} animate={{x: 0, transition:{
                        duration: .5
                    }}} src={Logo} alt="Logotipo" />
                </div>
                <nav className='header__navigation'>
                    <motion.ul initial={{opacity: 0}} animate={{opacity: 100}}>
                        <li><a href="">Nav1</a></li>
                        <li><a href="">Nav2</a></li>
                        <li><a href="">Nav3</a></li>
                    </motion.ul>
                </nav>
                <div className='header__user'>
                    <button>Entrar</button>
                    <button>Cadastrar</button>
                </div>
            </div>
        </header>
    )
}