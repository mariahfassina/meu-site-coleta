import React from 'react';

function TotalColetadoPage() {
  return (
    <main>
      <section id="evolucao-coleta" className="info-section">
        <div className="container">
          <h2>Evolução do Total Coletado</h2>
          <img src="/imagens/grafico-total-coletado.png" alt="Gráfico mostrando a quantidade de material reciclável coletado em Assis Chateaubriand." className="grafico-responsivo" width="800" height="500" loading="lazy" />
        </div>
      </section>
    </main>
  );
}

export default TotalColetadoPage;