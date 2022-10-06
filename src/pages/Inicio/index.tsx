import Servicos from 'components/Servicos';
import SobreNos from 'components/SobreNos';
//import Teste from 'components/Teste';
import styles from './Inicio.module.scss';


export default function Inicio() {

    return (
        
        <div className={styles['inicio']}> 
            
            <SobreNos />    
            <Servicos />
        </div>
    );
}