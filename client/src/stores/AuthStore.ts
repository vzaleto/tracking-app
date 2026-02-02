import {makeAutoObservable} from "mobx";

interface AuthFormData{
    name:string,
    email:string
}
 class AuthStore{
    key="";
    isAuthorized  = false;
    constructor() {
        makeAutoObservable(this)
    }
    login(data:AuthFormData){

        if(!data.name.trim() || !data.email.trim()) return;

        this.key=`${data.name}|${data.email}`;
            this.isAuthorized = true;
            console.log( this.key,    this.isAuthorized)
    }
    logout(){
        this.key="";
        this.isAuthorized = false;
    }
}
export const authStore = new AuthStore();