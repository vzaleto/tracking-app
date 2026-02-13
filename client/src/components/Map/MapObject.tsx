import {observer} from "mobx-react-lite";
import {Marker, Popup} from "react-leaflet";
import {objectsStore} from "../../stores/ObjectsStore.ts";
import {createMarkerIcon} from "../../models/createMarkerIcon.ts";

export const MapObject = observer(() => {


    // const arrowIcon = (direction: number) => {
    //   return  L.divIcon({
    //         className: 'rotating',
    //         html: `<div style="transform: rotate(${direction}deg); font-size: 20px;">-></div>`,
    //         iconSize: [20, 20],
    //         iconAnchor: [10, 20]
    //     })
    // }
    return (
        <>
            {
                objectsStore.list.map((elem) => (

                    <Marker key={elem.id} position={[elem.lat, elem.lon]}  icon={createMarkerIcon(elem.direction,elem.lost)}>
                        <Popup>
                            <div>
                                <div> id <span>{elem.id}</span></div>
                                {elem.lost && <div style={{color: 'red'}}> LOST </div>}
                            </div>
                        </Popup>
                    </Marker>
                ))
            }createMarkerIcon

        </>
    )
});

// interface Props {
//     elem: TrackedObject
// }

// useEffect(() => {
//     objectsStore.upsert({
//         id: 'test',
//         lat: 49.9935,
//         lon: 36.2304,
//         direction: 0,
//     } as any)
// }, [])
// export const  MapObject = observer( ({elem}: MapObjectProps)=> {
//     const isLost = elem.lost;
//     return (
//         <div title={elem.id} className={`absolute  transition-all duration-500 ease-linear ${isLost ? 'opacity-30 grayscale' : `opacity-100`}`} style={{
//             left: elem.lon * 20,
//              top: elem.lat * 20,
//             // left: x,
//             // top: y,
//         }}>
//             {/* точка */}
//             <div
//                 className={` w-3 h-3 rounded-full bg-green-500 ${elem.lost ? 'bg-red-500' : `bg-green-500`}  shadow-[0_0_10px_rgba(0,255,0,0.6)] `}
//               />
//
//             {/* направление */}
//             <div
//                 className="absolute left-1/2 -top-1/2 origin-left transition-transform duration-500"
//                 style={{
//                     transform: `rotate(${elem.direction}deg)`,
//                 }}
//             >
//                 <div className="relative text-green-500">&#8594;</div>
//             </div>
//         </div>
//     )
// })