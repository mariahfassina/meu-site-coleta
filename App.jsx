import { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// IMPORTAÇÃO CIRÚRGICA
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons';

function App() {
    // ... (o código do componente continua o mesmo)
  const [isMenuOpen, setMenuOpen] = useState(false);
  const mainRef = useRef(null);

  const handleFontSize = (increment) => {
    const contentArea = mainRef.current;
    if (!contentArea) return;
    const step = 0.1, minSize = 0.8, maxSize = 1.5;
    const currentSize = parseFloat(getComputedStyle(contentArea).fontSize) / parseFloat(getComputedStyle(document.body).fontSize) || 1;
    let newSize = currentSize + (increment ? step : -step);
    newSize = Math.max(minSize, Math.min(newSize, maxSize));
    contentArea.style.fontSize = `${newSize}em`;
    localStorage.setItem('fontSizePreference', newSize);
  };

  useEffect(() => {
    const savedSize = localStorage.getItem('fontSizePreference');
    if (savedSize && mainRef.current) {
      mainRef.current.style.fontSize = `${savedSize}em`;
    }
  }, []);
  return (
    <>
      <div className="utility-bar">
        <div className="container">
          <div className="social-media">
            <a href="https://www.instagram.com/uvr_assis/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da UVR Assis">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="accessibility-controls">
            <button aria-label="Diminuir fonte" onClick={() => handleFontSize(false)}>A-</button>
            <button aria-label="Aumentar fonte" onClick={() => handleFontSize(true)}>A+</button>
            <a href="#accessibility-info" aria-label="Acessibilidade"><FontAwesomeIcon icon={faUniversalAccess} /></a>
          </div>
        </div>
      </div>

      <Header isMenuOpen={isMenuOpen} onMenuToggle={setMenuOpen} />

      <main ref={mainRef}>
        <Outlet />
      </main>

      <Footer />

      <a href="https://www.instagram.com/uvr_assis/" target="_blank" rel="noopener noreferrer" className="sticky-insta">
        <FontAwesomeIcon icon={faInstagram} /> <span>Insta UVR</span>
      </a>
    </>
  );
}

export default App;