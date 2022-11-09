import Ad from "../components/Ad";
import Map from "../components/Map";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Home() {
  return (
    <div id="main_page">
      <Ad />
      <Map />
    </div>
  );
}
