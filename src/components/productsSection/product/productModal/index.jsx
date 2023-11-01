import './modal.scss';
import { motion } from 'framer-motion'

export const ProductModal = ({modalSwitch, modal, name, collection, image}) => {
    return(
        <>
            <div onClick={modalSwitch} className={`background__modal ${modal}`}>
                <motion.div initial={{scale: 0.5}} animate={{scale: 1}} className="product__modal">
                    <div className="modal__container">
                        <div className='image__container'>
                            <img src={image} alt="" />
                        </div>
                        <div className='informations'>
                            <div className='informations__container'>
                                <div className='informations__title'>
                                    <h1 className='modal-font title'>{name}</h1>
                                    <h1 className='modal-font collection'>{collection}</h1>
                                </div>
                                <div className='informations__itens'>

                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}