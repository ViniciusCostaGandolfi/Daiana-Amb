import Banner from 'components/Banner';
import Menu from 'components/Menu';
import Rodape from 'components/Rodape';
import Servicos from 'components/Servicos';
import WhatsApp from 'components/WhatsApp';
import Contato from 'pages/Contato';
import Inicio from 'pages/Inicio';
import Sobre from 'pages/Sobre';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function AppRouter() {
    return (
        <Router>
            <Menu />
            <WhatsApp />
            <Banner />
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route path="/sobre" element={<Sobre />}/>
                <Route path="/servicos" element={<Servicos />}/>
                <Route path="/contato" element={<Contato />}/>
            </Routes>
            <Rodape />
        </Router>
    );
}

export default AppRouter;