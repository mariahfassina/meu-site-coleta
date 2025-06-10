import React from 'react';

function ComoFazerPage() {
  return (
    <main>
      <section id="como-fazer" className="info-section">
        <div className="container">
          <h2><i className="fas fa-trash-alt"></i> Como fazer a separação?</h2>
          <p>É muito fácil!</p>
          <p>Separe os resíduos recicláveis, considerando o que for de papel, plástico, vidro e metal.</p>
          <p>
            Enxágue as embalagens e as coloque no saco de ráfia ou reaproveite sacolas e caixas de papelão.
            Depois, coloque na frente de sua casa/comércio, mas lembrando, é necessário que seja nos dias e
            períodos específicos, para o caminhão da <strong>“Coleta Amiga”</strong> passar recolhendo esses
            materiais, que são encaminhados para a Unidade de Valorização de Recicláveis do município.
          </p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cfYXew_H0LU"
            title="Vídeo do YouTube: Guia prático sobre como separar o lixo em casa" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>
      </section>
    </main>
  );
}

export default ComoFazerPage;