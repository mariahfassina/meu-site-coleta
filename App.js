import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import UtilityBar from './components/UtilityBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Acamar from './pages/Acamar';
import Contato from './pages/Contato';
import TotalColetado from './pages/TotalColetado';
import ComoSepararComoFazer from './pages/ComoSepararComoFazer';
import ComoSepararResiduos from './pages/ComoSepararResiduos';
import ComoSepararPorqueSeparar from './pages/ComoSepararPorqueSeparar';
import Error404 from './pages/Error404';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './assets/css/style.css';
import './index.css';

library.add(fab);

function App() {
    return (
        <HelmetProvider>
            <HashRouter>
                <div>
                    <UtilityBar />
                    <Header /> {/* Header fora das Routes para sempre ser exibido */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/acamar" element={<Acamar />} />
                        <Route path="/contato" element={<Contato />} />
                        <Route path="/total-coletado" element={<TotalColetado />} />
                        <Route path="/como-separar/como-fazer" element={<ComoSepararComoFazer />} />
                        <Route path="/como-separar/residuos" element={<ComoSepararResiduos />} />
                        <Route path="/como-separar/porque-separar" element={<ComoSepararPorqueSeparar />} />
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                    <Footer />
                </div>
            </HashRouter>
        </HelmetProvider>
    );
}

export default App;