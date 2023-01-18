import SobreNos from 'components/SobreNos';
import styles from './Sobre.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';


export default function Sobre() {
    const boxVariant = {
        visible: { opacity: 1, y: 0, transition: {duration: 0.8} },
        hidden: { opacity: 0, y: 150 },
    };
    return (
        
        <div className={styles['sobre']}> 
            <motion.div
                variants={boxVariant}
                initial='hidden'
                animate='visible'
            >
                <div className={styles['sobre__DNA']}>
                    <div className={styles['sobre__DNA__texto']}>
                        <h2 className={styles['sobre__DNA__texto__titulo']}>Nosso DNA</h2>
                        <p className={styles['sobre__DNA__texto__descricao']}>A Daiana Silva Gestão Ambiental é uma empresa de consultoria ambiental localizada em Limeira/SP, que atende diversas cidades no Brasil .</p>
                        <p className={styles['sobre__DNA__texto__descricao']}> Nossa empresa soluciona problemas e possibilita a regularização de intervenções ambientais, atuamos de modo preventivo, auxiliando nossos clientes nas tomadas de decisão em seus projetos, reduzindo seus impactos ambientais e financeiros, além de ampliar as possibilidades ligadas a gestão ambiental.</p>
                        <p className={styles['sobre__DNA__texto__descricao']}>Nosso atendimento aos clientes é proficional e feito na medida, considerando todas as pecularidades, prezamos por conhece-los e realizar o serviço do melhor modo possível. 
                        Aqui na Daiana Silva Gestão Ambiental, levamos os desafios de nossos clientes, como nossos, sempre encontrando as melhores soluções para cada desafio..</p>
                    </div>
                    <div className={styles['sobre__DNA__imagem']}>
                        <FontAwesomeIcon  icon={faHelmetSafety} className={styles['sobre__DNA__imagem__icone']}/>
                    </div>
                
                    
                    
                </div>
            </motion.div>
            <SobreNos />
            
        </div>
    );
}
