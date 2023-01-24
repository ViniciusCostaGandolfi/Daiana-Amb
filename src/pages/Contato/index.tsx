import styles from './Contato.module.scss';
import { motion } from 'framer-motion';



export default function Contato(){
    const boxVariant = {
        visible: { opacity: 1, y: 0, transition: {duration: 1.5} },
        hidden: { opacity: 0, y: 150 },
    };
    return(
        <motion.div
            variants={boxVariant}
            initial='hidden'
            animate='visible'
        >
            <div className={styles['mapaContainer']} >
                <h2 className={styles['mapaContainer__titulo']}>
                    Onde Estamos
                </h2>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5460640701854!2d-47.39829804834951!3d-22.558671131142777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c880936a3dcccf%3A0x97fca9996212fa51!2sR.%20Boa%20Vista%2C%20238%20-%20Boa%20Vista%2C%20Limeira%20-%20SP%2C%2013486-110!5e0!3m2!1spt-BR!2sbr!4v1665077720540!5m2!1spt-BR!2sbr" 
                    className={styles['mapaContainer__mapa']}
                    title="Mapa Daiana Silva Engenharia Ambiental"
                >
                    
                </iframe>
            </div>
        </motion.div>
    );
}
