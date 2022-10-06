import styles from './Banner.module.scss';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';





function Banner() {
    const boxVariant = {
        visible: { opacity: 1, x: 0, transition: {duration: 1.5} },
        hidden: { opacity: 0, x: -200 },
    };
    return (
        <div className={styles['banner']}>
            <div className={styles['banner__imagem']}>
                <motion.div
                    variants={boxVariant}
                    initial='hidden'
                    animate='visible'
                >
                    <h1 className={styles['banner__titulo']}>Engenharia e Gestão Abiental <br/> Convivendo em Harmonia</h1>
                </motion.div>
                
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}
export default Banner;



