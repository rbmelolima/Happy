import React from 'react';
import '../styles/pages/landing.css';

import LogoImage from '../assets/logo.svg';
import { FiArrowRight } from 'react-icons/fi';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={ LogoImage } alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Baixada Santista</strong>
          <span>São Paulo</span>
        </div>

        <a href="" className="enter-app">
          <FiArrowRight size={ 26 } color={ "rba(0, 0, 0, 0.6)" } />
        </a>
      </div>
    </div>
  );
}

export default Landing;
