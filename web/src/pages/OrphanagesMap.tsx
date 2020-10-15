import React from 'react';

import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import mapMarkerImg from '../images/map-marker.svg';

import {Map, TileLayer, Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
import Leaflet from 'leaflet';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize:[58,68],
    iconAnchor:[29,68],
    
})

function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>

                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita</p>
                </header>

                <footer>
                    <strong>Morro Agudo</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map
                center={[-20.7305509,-48.0491994]}
                zoom={15}
                style={{width:'100%', height:'100%'}}
                  >
               <TileLayer
                     url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                /> 
                
                <Marker 
                    icon={mapIcon}
                     position={[-20.7305509,-48.0491994]}
                />

            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>

        </div>

    );
}
export default  OrphanagesMap; 