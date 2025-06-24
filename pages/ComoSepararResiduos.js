import React from 'react';
import { Helmet } from 'react-helmet-async';

function ComoSepararResiduos() {
    return (
        <>
            <Helmet>
                <title>Quais São os Resíduos Recicláveis? - Coleta Seletiva</title>
                <meta name="description" content="Lista de resíduos recicláveis: papéis, plásticos, vidros e metais." />
            </Helmet>
            <main>
                <section id="quais-residuos" className="info-section">
                    <div className="container">
                        <h2><i className="fas fa-recycle" style={{ marginRight: '8px' }}></i>Quais são os resíduos recicláveis?</h2>
                        <li><strong>Papéis:</strong> papelão, embalagens cartonadas, caixas de ovos, cadernos usados, caixas de
                            leite longa vida, jornais, revistas, entre outros.</li>
                        <li><strong>Plásticos:</strong> garrafa pet, embalagens de detergente, amaciante, óleo de cozinha,
                            álcool, tampas de plástico, pacotes em gerais, frascos de xampu, potinhos de iogurte, sacolas de
                            supermercados, copos descartáveis, balde, PVC, entre outros.</li>
                        <li><strong>Vidros:</strong> garrafas de bebida, potes de conserva, frascos de perfume, potes de geleia,
                            entre outros.</li>
                        <li><strong>Metais:</strong> latinhas de cerveja e refrigerante, latas de doces, leite em pó, azeite,
                            latinhas de sardinha, arames, embalagens metálicas, latinhas de milho e ervilha, entre outros.</li>
                    </div>
                </section>
            </main>
        </>
    );
}

export default ComoSepararResiduos;