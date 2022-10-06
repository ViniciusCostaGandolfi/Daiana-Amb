import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from 'assets/logoDaiana.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';






function Menu() {
    const location = useLocation();
    const rotas = [
        {
            id: 0,
            label: 'Início',
            to: '/',
            icon: faHouse
        },

        {
            id: 1,
            label: 'Serviços',
            to: '/servicos',
            icon: faMagnifyingGlass
        },

        {
            id: 2,
            label: 'Sobre',
            to: '/sobre',
            icon: faUser
        },

        {
            id: 3,
            label: 'Contato',
            to: '/contato',
            icon: faPhone
        }
    ];
    return (
        <nav>
            <nav className={styles['menu']}>
                <Logo className={styles['menu__logo']}/>
                <ul className={styles['menu__lista']}>
                    {rotas.map((rota) => (
                        <li key={rota.id} className={styles['menu__item']}>
                            <Link 
                                className={classNames({
                                    [styles['menu__item__link']]: true,
                                    [styles['menu__item__link--ativo']]: location.pathname === rota.to
                                })} 
                                to={rota.to}>
                                <FontAwesomeIcon icon={rota.icon}/>{rota.label}
                            </Link>
                            
                        </li>
                    ))}
                </ul>
            </nav>
        </nav>
    );
}
export default Menu;