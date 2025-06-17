import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// IMPORTAÇÃO CIRÚRGICA: Apenas os ícones que realmente usamos
import { faHome, faChevronDown, faPlus, faMinus, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header({ onMenuToggle, isMenuOpen }) {
  // ... (o resto do código do componente continua igual)
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const closeMenu = () => {
    onMenuToggle(false); 
    setSubMenuOpen(false);
  };

  const handleSubMenuToggle = (e) => {
    e.preventDefault();
    setSubMenuOpen(prev => !prev);
  };

  return (
    <header className="main-header">
      <div className="container">
        <div className="logo-area">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img src="/imagens/logo-prefeitura.jpg" alt="Logo da Prefeitura de Assis Chateaubriand" className="logo" width="260" height="60" />
          </Link>
        </div>
        <button className={`menu-toggle ${isMenuOpen ? 'is-active' : ''}`} onClick={() => onMenuToggle(!isMenuOpen)} aria-label="Abrir menu" aria-expanded={isMenuOpen} aria-controls="main-nav">
          <FontAwesomeIcon icon={faBars} className="icon-open" />
          <FontAwesomeIcon icon={faTimes} className="icon-close" />
        </button>
        <nav className={`main-nav ${isMenuOpen ? 'is-active' : ''}`} id="main-nav">
          <ul>
            <li><NavLink to="/" onClick={closeMenu} aria-label="Página Inicial"><FontAwesomeIcon icon={faHome} /></NavLink></li>
            <li className="has-submenu">
              <a href="#" onClick={handleSubMenuToggle}>Como separar<FontAwesomeIcon icon={faChevronDown} className="icon-arrow" /></a>
              <button className={`submenu-toggle ${isSubMenuOpen ? 'is-active' : ''}`} onClick={handleSubMenuToggle} aria-label="Mostrar submenu" aria-expanded={isSubMenuOpen}>
                <FontAwesomeIcon icon={faPlus} className="icon-plus" />
                <FontAwesomeIcon icon={faMinus} className="icon-minus" />
              </button>
              <ul className={`submenu ${isSubMenuOpen ? 'submenu-active' : ''}`}>
                <li><NavLink to="/como-fazer-a-separacao" onClick={closeMenu}>Como fazer a separação?</NavLink></li>
                <li><NavLink to="/quais-sao-os-residuos" onClick={closeMenu}>Quais são os resíduos recicláveis?</NavLink></li>
                <li><NavLink to="/porque-separar-os-residuos" onClick={closeMenu}>Por que separar os resíduos?</NavLink></li>
              </ul>
            </li>
            <li><a href="/#cronograma" onClick={closeMenu}>Cronograma</a></li>
            <li><a href="/docs/cartilha-deco.pdf" target="_blank" rel="noopener noreferrer">Cartilha</a></li>
            <li><NavLink to="/quem-somos" onClick={closeMenu}>Quem somos</NavLink></li>
            <li><NavLink to="/total-coletado" onClick={closeMenu}>Total coletado</NavLink></li>
            <li className="menu-contato-destaque">
              <NavLink to="/contato" onClick={closeMenu}>Contato</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;