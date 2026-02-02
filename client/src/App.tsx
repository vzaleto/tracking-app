import { useEffect} from "react";
import {socketService} from "./services/SoketService.ts";
import {authStore} from "./stores/AuthStore.ts";
import {FormAuth} from "./components/Form/Form.tsx";
import {observer} from "mobx-react-lite";
import {MapPaint} from "./components/Map/Map.tsx";
import {objectsStore} from "./stores/ObjectsStore.ts";


export const App = observer(()=>{

    useEffect(() => {
        console.log(authStore.key,authStore.key)

        if(authStore.isAuthorized && authStore.key){
           console.log(authStore.key)
            socketService.connect(authStore.key)
        }else {
            socketService.disconnect()
            objectsStore.clear()
        }

    }, [authStore.isAuthorized,authStore.key]);

    return(
        <div >
            { authStore.isAuthorized ? <MapPaint/>   : <FormAuth/>}
        </div>

    )
})