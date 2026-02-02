import L from "leaflet";

export const createMarkerIcon = (direction:number,isLost:boolean)=>{
  return   L.divIcon({
      className: "",
      html: `
      <div style="position: relative; width: 24px; height: 24px;">
        
        <!-- точка -->
        <div style="
          position: absolute;
          left: 50%;
          top: 50%;
          width: 10px;
          height: 10px;
          background: ${isLost ? "red" : "brown"};
          border-radius: 999px;
          transform: translate(-50%, -50%);
        "></div>

        <!-- стрелка -->
        <div style="
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) rotate(${direction}deg);
          font-size: 20px;
          opacity: ${isLost ? 0.4 : 1};
          color: ${isLost ? "red" : "brown"};;
          padding: 10px 0px 0px 0px;
        ">
     &#9658;
        </div>

      </div>
    `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
  })
}