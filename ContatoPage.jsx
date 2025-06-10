import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// IMPORTAÇÃO CIRÚRGICA
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function ContatoPage() {
    // ... (o resto do código continua o mesmo)
     return (
    <main>
      <section id="contato-info" className="info-section">
        <div className="container">
          <h2>Entre em Contato</h2>
          <p>Tem dúvidas sobre a coleta seletiva, horários, ou gostaria de fazer uma sugestão? Utilize os canais abaixo:</p>
          <div style={{ marginTop: '30px', lineHeight: '2' }}>
            <h3>Secretaria de Meio Ambiente / Coleta Amiga:</h3>
            <p><FontAwesomeIcon icon={faPhone} className="fa-fw" /> <strong>Telefone:</strong> (44) 3528-XXXX</p>
            <p><FontAwesomeIcon icon={faEnvelope} className="fa-fw" /> <strong>Email:</strong> meioambiente@assischateaubriand.pr.gov.br</p>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} className="fa-fw" /> <strong>Endereço:</strong> (Adicione o endereço se aplicável)</p>
            <p><FontAwesomeIcon icon={faWhatsapp} className="fa-fw" /> <strong>WhatsApp:</strong> (44) 9XXXX-XXXX</p>
            <h3 style={{ marginTop: '30px' }}>ACAMAR (Associação de Catadores):</h3>
            <p><FontAwesomeIcon icon={faPhone} className="fa-fw" /> <strong>Telefone:</strong> (44) XXXX-XXXX</p>
            <p><FontAwesomeIcon icon={faInstagram} className="fa-fw" /> <strong>Instagram:</strong> <a href="https://www.instagram.com/uvr_assis/" target="_blank" rel="noopener noreferrer">@uvr_assis</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContatoPage;