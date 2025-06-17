import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// IMPORTAÇÃO CIRÚRGICA
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  // O código do componente continua o mesmo...
  return (
    <footer>
      <div className="footer-line footer-logos">
        <div className="container">
          <img src="/imagens/logo-itaipu.png" alt="Logo Itaipu Binacional" className="logo-parceiro" width="138" height="75" loading="lazy" />
          <img src="/imagens/logo-inpar.png" alt="Logo InPAR" className="logo-parceiro" width="136" height="75" loading="lazy" />
          <img src="/imagens/logo-coleta-amiga.png" alt="Logo Coleta Amiga" className="logo-principal-parceiro" width="180" height="90" loading="lazy" />
          <img src="/imagens/logo-acamar.png" alt="Logo ACAMAR" className="logo-parceiro" width="135" height="75" loading="lazy" />
          <img src="/imagens/logo-educacao-ambiental.png" alt="Logo Educação Ambiental" className="logo-principal-parceiro" width="170" height="90" loading="lazy" />
          <img src="/imagens/logo-secretaria.png" alt="Logo Secretaria Municipal" className="logo-principal-parceiro" width="175" height="90" loading="lazy" />
          <img src="/imagens/logo-prefeitura-rodape.png" alt="Logo Município de Assis Chateaubriand" className="logo-principal-parceiro" width="180" height="90" loading="lazy" />
        </div>
      </div>
      <div className="footer-line footer-ods">
        <div className="container">
          <img src="/imagens/logo-ods6.png" alt="Logo ODS 6" width="90" height="90" loading="lazy" />
          <img src="/imagens/logo-ods8.png" alt="Logo ODS 8" width="90" height="90" loading="lazy" />
          <img src="/imagens/logo-ods10.png" alt="Logo ODS 10" width="90" height="90" loading="lazy" />
          <img src="/imagens/logo-ods11.png" alt="Logo ODS 11" width="90" height="90" loading="lazy" />
          <img src="/imagens/logo-ods12.png" alt="Logo ODS 12" width="90" height="90" loading="lazy" />
        </div>
      </div>
      <div className="footer-quick-links">
        <a href="https://www.instagram.com/uvr_assis/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /> Insta UVR</a>
        <Link to="/"><FontAwesomeIcon icon={faHome} /> Página Inicial</Link>
      </div>
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Prefeitura Municipal de Assis Chateaubriand. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;