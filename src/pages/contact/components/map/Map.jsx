import MapCSS from "./Map.module.css";
import map from "assets/images/Map.webp";

const Map = () => {
    return (
        <div className={MapCSS.map}>
            <img src={map} alt="map" />
        </div>
    );
}

export default Map;