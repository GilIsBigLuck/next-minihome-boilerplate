"use client";

import { cva } from "class-variance-authority";
import { useEffect, useRef, useState } from "react";

const mapSectionStyles = cva([
    "w-full relative h-[450px] overflow-hidden",
])

const mapContainerStyles = cva([
    "absolute inset-0 w-full h-full",
])

const mapDetailsStyles = cva([
    "absolute bottom-10 left-10 bg-white/90 dark:bg-bg-inverse/90",
    "backdrop-blur-md p-4 rounded-lg shadow-xl border border-white/20",
    "hidden md:block z-10",
])

const mapDetailsLabelStyles = cva([
    "text-xs font-black text-primary uppercase mb-1",
])

const mapDetailsTextStyles = cva([
    "text-sm font-bold",
])

interface MapContentProps {
    label: string;
    address: string;
    latitude: number;
    longitude: number;
}

const mapContent: MapContentProps = {
    label: "HQ Location",
    address: "1200 Market Street, San Francisco",
    latitude: 37.7749,
    longitude: -122.4194,
}

declare global {
    interface Window {
        kakao: any;
    }
}

export default function MapSection() {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        // 카카오맵 API 키 (환경변수에서 가져오기)
        const KAKAO_MAP_API_KEY = process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY || "";

        if (!KAKAO_MAP_API_KEY) {
            console.warn("카카오맵 API 키가 설정되지 않았습니다. NEXT_PUBLIC_KAKAO_MAP_API_KEY 환경변수를 설정해주세요.");
            return;
        } 

        // 카카오맵 스크립트가 이미 로드되어 있는지 확인
        if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(() => {
                initializeMap();
            });
            return;
        }

        // 카카오맵 스크립트 동적 로드
        const script = document.createElement("script");
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_API_KEY}&autoload=false`;
        script.async = true;
        script.onload = () => {
            window.kakao.maps.load(() => {
                setMapLoaded(true);
                initializeMap();
            });
        };
        document.head.appendChild(script);

        return () => {
            // cleanup
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    const initializeMap = () => {
        if (!mapContainerRef.current || !window.kakao || !window.kakao.maps) {
            return;
        }

        const { kakao } = window;
        const { latitude, longitude } = mapContent;

        // 지도 생성
        const mapOption = {
            center: new kakao.maps.LatLng(latitude, longitude),
            level: 3, // 지도의 확대 레벨
        };

        const map = new kakao.maps.Map(mapContainerRef.current, mapOption);

        // 마커 생성
        const markerPosition = new kakao.maps.LatLng(latitude, longitude);
        const marker = new kakao.maps.Marker({
            position: markerPosition,
        });

        // 마커를 지도에 표시
        marker.setMap(map);

        // 커스텀 마커 이미지 (선택사항)
        const imageSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%230e776c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'/%3E%3Ccircle cx='12' cy='10' r='3'/%3E%3C/svg%3E";
        const imageSize = new kakao.maps.Size(32, 32);
        const imageOption = { offset: new kakao.maps.Point(16, 32) };
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
        marker.setImage(markerImage);

        // 인포윈도우 생성 (선택사항)
        const infowindow = new kakao.maps.InfoWindow({
            content: `<div style="padding:8px;text-align:center;font-weight:bold;">${mapContent.address}</div>`,
        });

        // 마커 클릭 시 인포윈도우 표시
        kakao.maps.event.addListener(marker, "click", () => {
            infowindow.open(map, marker);
        });
    };

    return (
        <section id="map" className={mapSectionStyles()}>
            <div ref={mapContainerRef} className={mapContainerStyles()} />

            {/* Map Details Float */}
            <div className={mapDetailsStyles()}>
                <p className={mapDetailsLabelStyles()}>{mapContent.label}</p>
                <p className={mapDetailsTextStyles()}>{mapContent.address}</p>
            </div>
        </section>
    )
}
