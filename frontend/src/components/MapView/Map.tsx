import React, { useState, useEffect, useCallback, useRef } from "react";
import { Coord, mapOptions, MapType } from "./helpers";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  Polyline,
  InfoWindow,
} from "@react-google-maps/api";

export interface Props {
  markers: Coord[] | null;
  showPolys?: boolean;
  markerInfo?: React.FC;
}
const libraries: ["drawing"] = ["drawing"];

export const Map: React.FC<Props> = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBAefhRlXEH3vCko-zZTX6PHllTR6av4WI",
    libraries,
  });

  const Info = props.markerInfo as React.FC;

  const mapRef = useRef<MapType>(null);

  const onLoad = useCallback((map: MapType) => {
    mapRef.current = map;
  }, []);

  const [select, setSelect] = useState<Coord | null>(null);

  const [lat] = useState<number | null>(() => {
    if (!!props.markers && props.markers.length !== 0) {
      return props.markers[props.markers.length - 1].lat;
    }
    return null;
  });
  const [lng] = useState<number | null>(() => {
    if (!!props.markers && props.markers.length !== 0) {
      return props.markers[props.markers.length - 1].lng;
    }
    return null;
  });

  const panTo = useCallback(() => {
    mapRef.current?.panTo({
      lat: lat || mapOptions.center.lat,
      lng: lng || mapOptions.center.lng,
    });
    console.log("changed");
  }, [lat, lng]);

  useEffect(() => {
    panTo();
  }, [panTo]);

  if (isLoaded) {
    return (
      <GoogleMap
        mapContainerStyle={mapOptions.containerStyle}
        zoom={mapOptions.zoom}
        center={mapOptions.center}
        options={mapOptions.options}
        onLoad={onLoad}
      >
        {!!props.markers &&
          props.markers.length !== 0 &&
          props.markers.map((marker, i) => (
            <Marker
              key={i}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => setSelect(marker)}
            />
          ))}

        {props.showPolys && (
          <Polyline
            path={[
              mapOptions.center,
              !!props.markers && props.markers.length !== 0
                ? props.markers[0]
                : mapOptions.center,
            ]}
            options={{ strokeColor: "#FF6347" }}
          />
        )}

        {select && (
          <InfoWindow
            position={{ lat: select.lat, lng: select.lng }}
            onCloseClick={() => setSelect(null)}
          >
            {props.markerInfo ? <Info /> : <div>Marker</div>}
          </InfoWindow>
        )}
      </GoogleMap>
    );
  } else {
    return <div>Map is not ready!</div>;
  }
};
