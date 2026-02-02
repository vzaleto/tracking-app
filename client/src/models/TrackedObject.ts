export interface TrackedObject{
    id:string,
    lat:number,
    lon:number,
    direction:number,
    lastUpdate:number,
    lost:boolean
}
export interface MapObjectProps{
    elem : TrackedObject
}