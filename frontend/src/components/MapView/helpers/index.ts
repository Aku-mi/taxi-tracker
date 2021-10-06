import { useGoogleMap } from "@react-google-maps/api";
import styles from "./styles";

export type MapType = ReturnType<typeof useGoogleMap>;

export const mapOptions = {
  containerStyle: {
    width: "100%",
    height: "94vh",
  },
  zoom: 12,
  center: {
    lat: 10.9878,
    lng: -74.7889,
  },
  options: {
    styles,
    disableDoubleClickZoom: true,
    fullscreenControl: false,
    mapTypeControl: false,
  },
};

export interface Coord {
  lat: number;
  lng: number;
  tmp: number;
  speed: number;
}
