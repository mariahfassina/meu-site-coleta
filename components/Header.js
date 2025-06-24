import React from 'react';
import { NavLink } from 'react-router-dom';
import logoPrefeitura from '../assets/imagens/logo-prefeitura.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faHome, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faChevronDown, faHome, faBars, faTimes, fab);

function Header() {
    return (
        <header className="main-header">
            <div className="container">
                <div className="logo-area">
                    <NavLink to="/" className="logo-link">
                        <img src={logoPrefeitura} alt="Logo oficial da Prefeitura Municipal de Assis Chateaubriand" className="logo" />
                    </NavLink>
                </div>
                <button className="menu-toggle" aria-label="Abrir menu" aria-expanded={false}>
                    <FontAwesomeIcon icon={faBars} className="icon-open" />
                    <FontAwesomeIcon icon={faTimes} className="icon-close" />
                </button>
                <nav className="main-nav" id="main-nav">
                    <ul>
                        <li><NavLink to="/" aria-label="Página Inicial" end><FontAwesomeIcon icon={faHome} /></NavLink></li>
                        <li className="has-submenu" >
                            <a href="#" >
                                Como separar
                                <FontAwesomeIcon icon={faChevronDown} className="icon-arrow" />
                            </a>
                            <ul className="submenu" >
                                <li><NavLink to="/como-separar/como-fazer">Como fazer a separação?</NavLink></li>
                                <li><NavLink to="/como-separar/residuos">Quais são os resíduos recicláveis?</NavLink></li>
                                <li><NavLink to="/como-separar/porque-separar">Por que separar os resíduos?</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/#cronograma">Cronograma</NavLink></li>
                        <li><a href="docs/cartilha-deco.pdf" target="_blank" rel="noopener noreferrer">Cartilha</a></li>
                        <li><NavLink to="/acamar">Quem somos</NavLink></li>
                        <li><NavLink to="/total-coletado">Total coletado</NavLink></li>
                        <li className="menu-contato-destaque">
                            <NavLink to="/contato">Contato</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;