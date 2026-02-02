import { useEffect} from "react";
import {socketService} from "../services/SoketService.ts";
import {authStore} from "../stores/AuthStore.ts";
import {FormAuth} from "../components/Form/Form.tsx";

export function App(){

    useEffect(() => {

        if(authStore.isAuthorized){
            if(!authStore.key) return
            socketService.connect(authStore.key)
        }else {
            socketService.disconnect()
        }

    }, [authStore.isAuthorized,authStore.key]);

    return(
        <FormAuth/>
    )
}