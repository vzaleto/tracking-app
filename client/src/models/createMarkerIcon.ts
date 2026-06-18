import L from "leaflet";

export const createMarkerIcon = ()=>{
  return   L.divIcon({
      className: "",
      html: `
      <div>
        <!-- arrow -->
        <img src="/car-taxi.svg"  style="
        
        position: absolute;
          width: 32px;
          height: 32px;
          transition: transform 0.5s linear;
          display: block;
       
        "/>
      </div>
    `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
  })
}

