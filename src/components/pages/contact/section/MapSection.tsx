"use client";

import { cva } from "class-variance-authority";
import { useEffect, useRef, useState } from "react";
import { clientEnv } from "@/lib/env";

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
        naver: any;
    }
}

export default function MapSection() {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const [mapLoaded, setMapLoaded] = useState(false);
    const [mapError, setMapError] = useState<string | null>(null);

    useEffect(() => {
        // 네이버 지도 API Client ID (타입 안전한 환경변수 사용)
        const NAVER_MAP_CLIENT_ID = clientEnv.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;

        if (!NAVER_MAP_CLIENT_ID) {
            setMapError("네이버 지도 API 키가 설정되지 않았습니다.");
            console.error("❌ 네이버 지도 API 키가 설정되지 않았습니다. NEXT_PUBLIC_NAVER_MAP_CLIENT_ID 환경변수를 설정해주세요.");
            return;
        }

        // 현재 도메인 정보 출력 (디버깅용)
        const currentOrigin = window.location.origin;
        console.log("📍 네이버 지도 로드 시도:");
        console.log(`   도메인: ${currentOrigin}`);
        console.log(`   Client ID: ${NAVER_MAP_CLIENT_ID.substring(0, 8)}...`);

        // 네이버 지도 스크립트가 이미 로드되어 있는지 확인
        if (window.naver && window.naver.maps) {
            initializeMap();
            return;
        }

        // 네이버 지도 스크립트 동적 로드
        const scriptUrl = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_MAP_CLIENT_ID}`;

        const script = document.createElement("script");
        script.src = scriptUrl;
        script.async = true;

        script.onload = () => {
            console.log("✅ 네이버 지도 스크립트 로드 성공");
            if (window.naver && window.naver.maps) {
                console.log("✅ 네이버 지도 초기화 성공");
                setMapLoaded(true);
                setMapError(null);
                initializeMap();
            } else {
                const errorMsg = "네이버 지도 객체를 찾을 수 없습니다.";
                setMapError(errorMsg);
                console.error("❌", errorMsg);
            }
        };

        script.onerror = (event) => {
            const errorMsg = `네이버 지도를 불러올 수 없습니다. (도메인: ${currentOrigin})`;
            setMapError(errorMsg);
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
        if (!mapContainerRef.current || !window.naver || !window.naver.maps) {
            return;
        }

        const { naver } = window;
        const { latitude, longitude } = mapContent;

        // 지도 생성
        const mapOptions = {
            center: new naver.maps.LatLng(latitude, longitude),
            zoom: 15, // 지도의 확대 레벨
        };

        const map = new naver.maps.Map(mapContainerRef.current, mapOptions);

        // 마커 생성
        const markerPosition = new naver.maps.LatLng(latitude, longitude);
        const marker = new naver.maps.Marker({
            position: markerPosition,
            map: map,
        });

        // 커스텀 마커 이미지 (선택사항)
        const markerIcon = {
            content: `<div style="width:32px;height:32px;background:url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'32\\' height=\\'32\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'%230e776c\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'%3E%3Cpath d=\\'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\\'/%3E%3Ccircle cx=\\'12\\' cy=\\'10\\' r=\\'3\\'/%3E%3C/svg%3E') no-repeat center;background-size:contain;"></div>`,
            anchor: new naver.maps.Point(16, 32),
        };
        marker.setIcon(markerIcon);

        // 인포윈도우 생성
        const infowindow = new naver.maps.InfoWindow({
            content: `<div style="padding:8px;text-align:center;font-weight:bold;min-width:150px;">${mapContent.address}</div>`,
        });

        // 마커 클릭 시 인포윈도우 표시
        naver.maps.Event.addListener(marker, "click", () => {
            if (infowindow.getMap()) {
                infowindow.close();
            } else {
                infowindow.open(map, marker);
            }
        });
    };

    return (
        <section id="map" className={mapSectionStyles()}>
            <div ref={mapContainerRef} className={mapContainerStyles()} />

            {/* 에러 메시지 표시 */}
            {mapError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 z-20">
                    <div className="text-center p-6 max-w-md">
                        <p className="text-red-600 dark:text-red-400 font-bold mb-2">⚠️ 지도를 불러올 수 없습니다</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{mapError}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                            네이버 클라우드 플랫폼에서 도메인 설정을 확인해주세요.
                        </p>
                    </div>
                </div>
            )}

            {/* Map Details Float */}
            <div className={mapDetailsStyles()}>
                <p className={mapDetailsLabelStyles()}>{mapContent.label}</p>
                <p className={mapDetailsTextStyles()}>{mapContent.address}</p>
            </div>
        </section>
    )
}
