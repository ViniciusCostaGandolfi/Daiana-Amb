
import { faWater, faFileCircleCheck, faFileSignature, faTree, faLeaf, faSeedling, faMountainCity, faFileShield } from '@fortawesome/free-solid-svg-icons';
import { faFileLines,  } from '@fortawesome/free-regular-svg-icons';




const servicosOferecidos = [
    {
        'id': 0,
        'titulo': 'Licenciamento Ambiental de Estabelecimentos',
        'descricao': 'Regularização do licencimento ambiental de estabelecimentos',
        'icone': faFileLines
    }, 
    
    {
        'id': 1,
        'titulo': 'Laudos e Projetos Ambientais',
        'descricao': 'Projetos e laudos para atividades utilizadoras de recursos ambientais.',
        'icone': faFileCircleCheck
    }, 
        
        
    {
        'id': 2,
        'titulo': 'Cadastro Ambiental Rural (CAR)',
        'descricao': 'CAR é um registro público nacional, obrigatório para todos os imóveis rurais.',
        'icone': faFileSignature
    }, 
        
    {
        'id': 3,
        'titulo': 'Programa de Regularização Ambiental',
        'descricao': 'Este é o programa nacional para adequar e promover a regularização ambiental',
        'icone': faFileShield
    },

    {
        'id': 4,
        'titulo': 'Plantio de Florestas Nativas',
        'descricao': 'O plantio de florestas nativas é o cultivo de árvores de espécies nativas para uso econômico.',
        'icone': faTree
    }, 

       
    
        
    {
        'id': 5,
        'titulo': 'Plantio e Conduçao de Culturas Florestais',
        'descricao': 'É o controle, adequação e condução de florestas nativas.',
        'icone': faLeaf
    }, 

    {
        'id': 6,
        'titulo': 'Inventário Florestais',
        'descricao': 'É o planejamento e aplicação de técnicas de medição para obter informações florestais.',
        'icone': faSeedling
    },
        
    {
        'id': 7,
        'titulo': 'Gerenciamento de Residuos',
        'descricao': 'Gerenciamento de residuos e otimização dos recursos ambientais.',
        'icone': faMountainCity
    }, 
    
    {
        'id': 8,
        'titulo': 'Recuperação de Áreas Degradadas',
        'descricao': 'Recuperação e adequação de áreas degradadas, que não vão se regenerar por si só.',
        'icone': faWater
    }
        
    
    
];

export default servicosOferecidos;
