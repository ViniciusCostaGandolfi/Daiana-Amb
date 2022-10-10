import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { ServicoOferecido } from 'types/ServicosOferecidos';
import styles from './Servico.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



type Props = ServicoOferecido;

function Servico(props: Props) {
    const {titulo, descricao, icone} = props;

    const boxVariant = {
        visible: { opacity: 1, transition: {duration: 0.8} },
        hidden: { opacity: 0 },
    };
    const control = useAnimation();
    const [ref, inView] = useInView();
    let contador = 0;
    useEffect(() => {
        if (inView) {
            control.start('visible');
        } else {
            control.start('hidden');
        }
        contador += 1;
    }, [control, inView]);

    return (
        <motion.div 
            className={styles['servico']}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -150 }
      }}
        >
            <div  className={styles['servico__conteudo']}>
                <h1  className={styles['servico__conteudo__titulo']}> {titulo} </h1>
                <p  className={styles['servico__conteudo__descricao']}> {descricao} </p>
            </div>
            <div className={styles['servico__conteudo__botao']}>
                <FontAwesomeIcon icon={icone}/>
            </div>
        </motion.div>
    );
}


export default Servico;
