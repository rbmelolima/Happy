import React from 'react';
import './index.css';

import LogoImage from '../../assets/logo.svg';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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

        <Link to="/map" className="enter-app">
          <FiArrowRight size={ 26 } />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
