import React, { useEffect } from "react";
import style from "../styles/map.module.css";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function MapTest() {
  useEffect(() => {
    const APIKEY = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${APIKEY}&autoload=false`;

    document.head.appendChild(mapScript);
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.555, 126.971),
          level: 3,
        };
        new window.kakao.maps.Map(mapContainer, mapOption);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
  }, []);

  return (
    <div className={style.container}>
      <h2>동물병원지도</h2>
      <div id="map" className={style.map}></div>
    </div>
  );
}
