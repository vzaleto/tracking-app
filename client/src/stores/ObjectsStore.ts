import type {TrackedObject} from "../models/TrackedObject.ts";
import {makeAutoObservable} from "mobx";

const MARK_LOST_TIMEOUT = 2000;
const REMOVE_LOST_TIMEOUT = 5 * 60 * 1000

export class ObjectsStore {

    objects = new Map<string, TrackedObject>();

    constructor() {
        makeAutoObservable(this)
        setInterval(() => {
            this.cleanUp();
        }, 1000)
    }

    upsert(data: TrackedObject) {
        const id = this.objects.get(data.id)
        const now = Date.now();

        function calcDirection(prev:TrackedObject, next:TrackedObject) {
            return (
                Math.atan2(next.lat - prev.lat, next.lon - prev.lon) *
                180 / Math.PI
            )
        }

        if (id) {
            const direction = calcDirection(id, data)

            this.objects.set(data.id, {
                ...id,
                ...data,
                lastUpdate: now,
                lost: false,
                direction,
            })
        } else {
            this.objects.set(data.id, {
                ...data,
                lastUpdate: now,
                lost: false,
                direction:0,
            })
        }
    }

    cleanUp() {
        const now =  Date.now()
        for (const [key,obj] of this.objects) {
            if (now - obj.lastUpdate > MARK_LOST_TIMEOUT) {
                this.objects.set(key,{
                    ...obj,
                    lost:true,
                })
            }
            if (now - obj.lastUpdate > REMOVE_LOST_TIMEOUT ) {
                this.objects.delete(key)
            }
        }
    }
    get list() {
        return Array.from(this.objects.values())
    }
    clear(){
        this.objects.clear()
    }
}

export const objectsStore = new ObjectsStore()

//  Map.get(key)
//  либо возвращает значение
// либо undefined
// НИКОГДА не создаёт запись

