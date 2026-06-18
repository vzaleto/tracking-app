import {useEffect, useMemo, useRef} from "react";
import { Marker } from "react-leaflet";
import type { Marker as LeafletMarker } from "leaflet";
import type { ReactNode } from "react";
import {createMarkerIcon} from "../../models/createMarkerIcon.ts";

type Props = {
    position: [number, number];
    children?: ReactNode;
    direction: number;
    isLost: boolean;
};

export function AnimatedMarker({ position, children,direction,isLost }: Props) {

    const markerRef = useRef<LeafletMarker | null>(null);
    const animationRef = useRef<number | null>(null);

    const initialIcon = useMemo(()=>{
        return createMarkerIcon(direction, isLost)
    },[])
    const initialPosition = useMemo(() => position, []);

    useEffect(() => {
        const marker = markerRef.current;

        if (!marker) return;

        const start = marker.getLatLng();

        const end = {
            lat: position[0],
            lng: position[1],
        };

        const duration = 1200;
        const startTime = performance.now();

        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }

        function animate(now: number) {
            const progress = Math.min((now - startTime) / duration, 1);

            const nextLat = start.lat + (end.lat - start.lat) * progress;
            const nextLng = start.lng + (end.lng - start.lng) * progress;

            marker!.setLatLng([nextLat, nextLng]);

            if (progress < 1) {

                animationRef.current = requestAnimationFrame(animate);
            }

        }
        animationRef.current = requestAnimationFrame(animate);
    }, [position[0], position[1]]);

    useEffect(() => {
      const marker =  markerRef.current;
      const element = marker?.getElement()
      const img = element?.querySelector("img");
        if(!img) return
        img.style.transform = `rotate(${direction}deg)`
        img.style.opacity = isLost ? '0.4' : '1'
    }, [direction, isLost]);

    return (
        <Marker
            ref={markerRef}
            position={initialPosition}
            icon={initialIcon}
        >
            {children}
        </Marker>
    );
}

