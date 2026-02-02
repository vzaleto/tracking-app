import {objectsStore, ObjectsStore} from "../stores/ObjectsStore.ts";
import type {TrackedObject} from "../models/TrackedObject.ts";

class SocketService {
    private socket: WebSocket | null = null;
    private readonly url: string;
     private objectStore: ObjectsStore;

    constructor(url: string, objectsStore:ObjectsStore) {
        this.url = url;
        this.objectStore = objectsStore
    }

    connect(key: string) {

        if (this.socket) return

        this.socket = new WebSocket(`${this.url}?=${key}`);

        this.socket.onmessage = (event) => {
            console.log(event.data);
            console.log(typeof event.data);

            const data: TrackedObject[] = JSON.parse(event.data);
            console.log(data.map(o => [o.lat.toFixed(4), o.lon.toFixed(4)]))

            data.forEach((elem) => {
                this.objectStore.upsert(elem);
            })
        }
        this.socket.onclose = () => {
            this.socket = null;
        }
    }

    disconnect() {
        this.socket?.close();
        this.socket = null
    }
}


export const socketService = new SocketService("ws://localhost:8080", objectsStore)
