import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import caminhaoColeta from '../assets/imagens/caminhao-coleta.jpg';
import cronogramaAtual from '../assets/imagens/cronograma-atual.png';
import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();
    const cronogramaRef = useRef(null);

    useEffect(() => {
        if (location.hash === '#cronograma' && cronogramaRef.current) {
            cronogramaRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location.hash]);

    return (
        <>
            <Helmet>
                <title>Coleta Seletiva - Prefeitura de Assis Chateaubriand</title>
                <meta name="description" content="Página inicial com cronograma da coleta de resíduos e informações úteis." />
            </Helmet>
            <main>
                <section id="hero">
                    <img src={caminhaoColeta} alt="Caminhão da Coleta Amiga circulando em rua arborizada de Assis Chateaubriand." />
                </section>
                <section id="cronograma" className="info-section" ref={cronogramaRef}>
                    <div className="container">
                        <h2>
                            <i className="fa-solid fa-calendar-days"></i> Cronograma da Coleta de Resíduos
                        </h2>
                        <p>Aqui você encontra os dias e horários da coleta seletiva e orgânica em seu bairro.</p>
                        <div id="cronograma-content">
                            <img
                                src={cronogramaAtual}
                                alt="Imagem do cronograma atual da coleta de lixo em Assis Chateaubriand."
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;