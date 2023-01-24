import MVVs from 'data/MVVs';
import MVV from './MVV';
import styles from './SobreNos.module.scss';


function SobreNos() {


    const lista = MVVs;
    
    

    return (
        <section className={styles['sobreNos']}>
            <h2 className={styles['sobreNos__titulo']}>Sobre Nós</h2>
            <p className={styles['sobreNos__descricao']}>Nós da Daiana Silva Consultoria e Gestão Ambiental entendemos que cada um de nossos clientes tem suas demandas e especificidades, que devem ser analizadas individualmente, utilizando toda experiência e conhecimento técnico de quem atua na área há mais de uma década.</p>

            <div className={styles['sobreNos__MVVs']}>
                {lista.map((item) => (
                    <MVV 
                        key={item.id}
                        {...item}
                    />
                    
                ))}
            </div>
                
        </section>
    );
}

export default SobreNos;
