import styles from './Rodape.module.scss';
import {ReactComponent as Logo} from 'assets/logoDaiana.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';



function Rodape(){

    return (
        <footer className={styles['rodape']}>

            <h2 className={styles['rodape__titulo']}>
                Contato
            </h2>
            <p className={styles['rodape__descricao']}>
                Nosso horário de atendimento é das 8:30 as 17:30.
            </p>

            <address className={styles['rodape__container']}>
                

                <Logo className={styles['rodape__container__logo']} />

                <ul className={styles['rodape__container__lista']}>
                    <li className={styles['rodape__container__item']}>
                        <a className={styles['rodape__container__item__ancora']} href='https://wa.me/+5519981745504' target="_blank" rel="noreferrer">
                            <FontAwesomeIcon size={'lg'} icon={faWhatsapp} />
                            19 98174-5504
                        </a>
                    </li>
                    <li className={styles['rodape__container__item']}>
                        <a className={styles['rodape__container__item__ancora']} href='mailto: daiaengenharia@gmail.com' target="_blank" rel="noreferrer">
                            <FontAwesomeIcon size={'lg'} icon={faEnvelope} />
                            daiaengenharia@gmail.com
                        </a>
                    </li>
                    <li className={styles['rodape__container__item']}>
                        <a className={styles['rodape__container__item__ancora']} href='https://goo.gl/maps/B3yHzR9aD6tC6my58' target="_blank" rel="noreferrer">
                            <FontAwesomeIcon size={'lg'} icon={faLocationDot} />
                            Rua Estanislau Bonk Filho, 49 <br/>
                            Jardim Bandeirantes. Limeira-SP
                        </a>
                    </li>
                </ul>
            </address>

        </footer>
    );
}

export default Rodape;
