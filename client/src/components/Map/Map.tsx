import {MapObject} from "./MapObject.tsx";
import {objectsStore} from "../../stores/ObjectsStore.ts";
import {observer} from "mobx-react-lite";
import {AppButton} from "../buttons/AppButton.tsx";
import {authStore} from "../../stores/AuthStore.ts";
import {LeafletMap} from "./LeafleMap.tsx";


export const MapPaint = observer(() => {

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="flex-col flex items-center justify-center ">
                {/*<div className="  relative w-[600px] h-[400px] rounded-xloverflow-hidden border border-white/10 shadow-2xl bg-black" style={{background: "url(/map.png)", backgroundSize: "cover", backgroundPosition: 'center'}}>*/}
                <div className="  relative w-[600px] h-[400px] rounded-xloverflow-hidden border border-white/10 shadow-2xl bg-black">

                <div className="absolute inset-0 bg-black/20 pointer-events-none"/>
                    <LeafletMap/>
                </div>
                <AppButton type="button" className='w-[600px]' onClick={()=> authStore.logout()} >Logout</AppButton>
            </div>
        </div>

    )
})


// useEffect(() => {
//
//     if (objectsStore.list.length === 0) {
//         objectsStore.upsert({
//             id: 'test',
//             lat: 10,
//             lon: 15,
//             direction: 0,
//         } as any)
//     }
// }, []);