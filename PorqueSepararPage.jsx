import React from 'react';

function PorqueSepararPage() {
  return (
    <main>
      <section id="porque-separar" className="info-section">
        <div className="container">
          <h2><i className="fas fa-seedling" style={{ marginRight: '8px' }}></i>POR QUE SEPARAR OS RESÍDUOS?</h2>
          <p>
            A separação poupa a natureza e traz mais qualidade de vida. O plástico usado, por exemplo, quando
            reciclado se transforma em plástico novo. Isso também acontece com o papel, vidro e metal. Para se
            ter uma ideia, cada 50 quilos de papel usado transformado em novo, evita que uma árvore seja
            cortada. Imagine quantas árvores nós podemos salvar!
          </p>
          <p>
            O descarte correto de resíduos e rejeitos também é muito importante para evitar diversos tipos de
            prejuízo ao meio ambiente e até mesmo a nossa saúde, além de contribuir para a economia de recursos
            naturais, como água e a energia.
          </p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/e2bnTHNV0Zw"
            title="Vídeo do YouTube explicando a importância da coleta seletiva e da separação do lixo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>
      </section>
    </main>
  );
}

export default PorqueSepararPage;