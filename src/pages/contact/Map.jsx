import React from "react";
import MapCSS from "./Map.module.css";
import map from "../../assets/Map.webp";

function Map() {
    return (
        <div className={MapCSS.map}>
            <img src={map} alt="map" />
        </div>
    );
}

export default Map;