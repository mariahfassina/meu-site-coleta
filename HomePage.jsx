import React from 'react';

function HomePage() {
  return (
    <>
      <section id="hero">
        <img src="/imagens/caminhao-coleta.jpg" alt="Caminhão da Coleta Amiga circulando em rua arborizada de Assis Chateaubriand." width="1200" height="450" />
      </section>
      <section id="cronograma" className="info-section">
        <div className="container">
          <h2><i className="fa-solid fa-calendar-days"></i> Cronograma da Coleta de Resíduos</h2>
          <p>Aqui você encontra os dias e horários da coleta seletiva e orgânica em seu bairro.</p>
          <div id="cronograma-content">
            <img src="/imagens/cronograma-atual.png" alt="Imagem do cronograma atual da coleta de lixo em Assis Chateaubriand." width="985" height="1395" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;