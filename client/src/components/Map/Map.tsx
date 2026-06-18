import {observer} from "mobx-react-lite";
import {AppButton} from "../buttons/AppButton.tsx";
import {authStore} from "../../stores/AuthStore.ts";
import {LeafletMap} from "./LeafleMap.tsx";
import {objectsStore} from "../../stores/ObjectsStore.ts";


export const MapPaint = observer(() => {

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="flex-col flex items-center justify-center ">
                <div className=" relative w-[600px] h-[400px] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                    {objectsStore.list.length === 0 && (
                        <div className="absolute z-[1000] inset-0 flex items-center justify-center bg-black/50 text-white font-semibold">
                            🚕 Подключение к серверу...
                        </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 pointer-events-none"/>
                    <LeafletMap/>
                     </div>
                <AppButton type="button" className='w-[600px]' onClick={() => authStore.logout()}>Logout</AppButton>
            </div>
        </div>

    )
})