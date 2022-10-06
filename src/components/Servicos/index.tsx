import styles from './Servicos.module.scss';
import servicosOferecidos from 'data/servicosOferecidos';
import Servico from './Servico';
 

function Servicos() {
    
    const lista = servicosOferecidos;
    return (
        <section className={styles['sessao__servicos']}>
            <div className={styles['servicos__sobre']}>
                <h1 className={styles['servicos__sobre__titulo']}> Serviços Oferecidos </h1>
                <p className={styles['servicos__sobre__descriçao']}> Aqui voce encontrará os melhores serviços do mercado. </p>
            </div>

            <div className={styles['servicos']}>
                {lista.map((item) => (
                    <Servico 
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>

        </section>
    );
}


export default Servicos;