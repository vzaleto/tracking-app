import {observer} from "mobx-react-lite";
import {Popup} from "react-leaflet";
import {objectsStore} from "../../stores/ObjectsStore.ts";
import {AnimatedMarker} from "../animatedMarker/AnimatedMarker.tsx";

export const MapObject = observer(() => {



    return (
        <>
            {
                objectsStore.list.map((elem) => (
                        <AnimatedMarker
                            key={elem.id}
                            position={[elem.lat, elem.lon]}
                            direction={elem.direction}
                            isLost={elem.lost}
                        >
                            <Popup>
                                <div>
                                    <div> id <span>{elem.id}</span></div>
                                    {elem.lost && <div style={{color: 'red'}}> LOST </div>}
                                </div>
                            </Popup>
                        </AnimatedMarker>
                    )
                )
            }


        </>
    )
});
