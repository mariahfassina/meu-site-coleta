import React from 'react';
import AccessibilityControls from './AccessibilityControls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab); // Adiciona todos os ícones de marca

function UtilityBar({ onIncreaseFontSize, onDecreaseFontSize }) {
  return (
    <div className="utility-bar">
      <div className="container">
        <div className="social-media">
          <a
            href="https://www.instagram.com/uvr_assis/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da UVR Assis"
          >
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
        </div>
        <AccessibilityControls
          onIncreaseFontSize={onIncreaseFontSize}
          onDecreaseFontSize={onDecreaseFontSize}
        />
      </div>
    </div>
  );
}

export default UtilityBar;