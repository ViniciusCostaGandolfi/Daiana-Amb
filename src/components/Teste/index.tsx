import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import './teste.css';




function Teste() {
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: {duration: 1} },
        hidden: { opacity: 0, scale: 0 },
    };
    const control = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            control.start('visible');
        } else {
            control.start('hidden');
        }
    }, [control, inView]);

    return (
        <div className='caixas'>
            <motion.div
                ref={ref}
                variants={boxVariant}
                initial='hidden'
                animate={control}
                className='box'
            >
                    Caixa2
            </motion.div>
            <motion.div
                ref={ref}
                variants={boxVariant}
                className='box'
                initial='hidden'
                animate={control}
            >
                    Caixa2
            </motion.div>
        </div>
    );
}
  
export default Teste;




