import http from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import { IncomingMessage } from 'http';

const PORT = Number(process.env.PORT) || 8080;

const server = http.createServer((req,res)=>{
    res.writeHead(200)
    res.end('OK')
});

const wss = new WebSocketServer({server});

const paramsData = [
    { id: '1', lat: 49.9935, lon: 36.2304, direction: 43 },
    { id: '2', lat: 49.995,  lon: 36.232,  direction: 44 },
    { id: '3', lat: 49.991,  lon: 36.228,  direction: 45 },
    { id: '4', lat: 49.989,  lon: 36.225,  direction: 46 },
    { id: '5', lat: 49.997,  lon: 36.235,  direction: 47 },
]

wss.on("connection", (ws: WebSocket, req: IncomingMessage) => {
    console.log("new  client connect")
    const interval = setInterval(() => {

        const CENTER_LAT = 49.9935
        const CENTER_LON = 36.2304

        const MIN_LAT = CENTER_LAT - 0.01
        const MAX_LAT = CENTER_LAT + 0.01
        const MIN_LON = CENTER_LON - 0.01
        const MAX_LON = CENTER_LON + 0.01

        paramsData.forEach((elem)=>{
            elem.lon += (Math.random() - 0.5)* 0.001;
            elem.lat += (Math.random() - 0.5)* 0.001;
        })

        let data = paramsData.map((elem) => {
            return {
                id: elem.id,
                lat: Math.max(MIN_LAT, Math.min(MAX_LAT, elem.lat)),
                lon:  Math.max(MIN_LON, Math.min(MAX_LON, elem.lon)),
                direction: elem.direction
            }
        })
  const filtered =  data.filter(() => Math.random() > 0.1)
        console.log(filtered)
            ws.send(JSON.stringify(filtered))
    }, 1000)
    ws.on('message', (data) => {
        console.log('message:', data.toString());
    });

    ws.on("close", () => {
        clearInterval(interval)
    })
})

server.lisn(PORT,()=>{
    console.log(`server conect port ${{PORT}}`)
})