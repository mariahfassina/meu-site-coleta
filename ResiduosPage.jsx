import React from 'react';

function ResiduosPage() {
  return (
    <main>
      <section id="quais-residuos" className="info-section">
        <div className="container">
          <h2><i className="fas fa-recycle" style={{ marginRight: '8px' }}></i>Quais são os resíduos recicláveis?</h2>
          <ul>
            <li><strong>Papéis:</strong> papelão, embalagens cartonadas, caixas de ovos, cadernos usados, caixas de leite longa vida, jornais, revistas, entre outros.</li>
            <li><strong>Plásticos:</strong> garrafa pet, embalagens de detergente, amaciante, óleo de cozinha, álcool, tampas de plástico, pacotes em gerais, frascos de xampu, potinhos de iogurte, sacolas de supermercados, copos descartáveis, balde, PVC, entre outros.</li>
            <li><strong>Vidros:</strong> garrafas de bebida, potes de conserva, frascos de perfume, potes de geleia, entre outros.</li>
            <li><strong>Metais:</strong> latinhas de cerveja e refrigerante, latas de doces, leite em pó, azeite, latinhas de sardinha, arames, embalagens metálicas, latinhas de milho e ervilha, entre outros.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default ResiduosPage;