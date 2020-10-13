import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import './index.css';
import LogoIcon from '../../assets/logo-icon.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={ LogoIcon } alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :D</p>
        </header>

        <footer>
          <strong>Baixada Santista</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={ [ -23.9536506, -46.3649686 ] }
        zoom={ 13 }
        style={ { width: '100%', height: '100%' } }
      >
        <TileLayer
          url={ `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${ process.env.REACT_APP_MAPBOX_TOKEN }` }
        />
      </Map>

      <Link to="/" className="create-orphanage">
        <FiPlus size={ 32 } color="FFF" />
      </Link>
    </div>

  );
}

export default OrphanagesMap;