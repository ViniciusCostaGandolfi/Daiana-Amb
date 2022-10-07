import styles from './MVV.module.scss';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { typeMVVs } from 'types/MVVs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





type Props = typeMVVs;


export default function MVV(props: Props) {
    const {titulo, descricao, icone, id} = props;

    const boxVariant = {
        visible: { opacity: 1, y: 0, transition: {duration: 0.8} },
        hidden: { opacity: 0, y: 150 },
    };
    const control = useAnimation();
    const [ref, inView] = useInView();
    let contador = 0;
    useEffect(() => {
        if (contador === 0) {
            control.start('visible');
        } else {
            control.start('hidden');
        }
        contador += 1;
    }, [control, inView]);


    return (
        <div>
            <motion.div 
                key={id} 
                className={styles['sobreNos__MVVs__MVV']}
                ref={ref}
                variants={boxVariant}
                initial='hidden'
                animate={control}
            >
                <FontAwesomeIcon size='5x' icon={icone} className={styles['sobreNos__MVVs__MVV__icone']}/>
                <h3 className={styles['sobreNos__MVVs__MVV__titulo']}>{titulo}</h3>
                <p className={styles['sobreNos__MVVs__MVV__descricao']}>{descricao}</p>     
            </motion.div>
        </div>
    );
}




