import {MapContainer, TileLayer} from "react-leaflet";
import {MapObject} from "./MapObject.tsx";

export function LeafletMap() {
    return (
        <MapContainer center={[49.9935, 36.2304]} zoom={13} style={{width: '100%', height: '100%'}}>
            <TileLayer attribution="© OpenStreetMap" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

            <MapObject/>
        </MapContainer>
    )
}