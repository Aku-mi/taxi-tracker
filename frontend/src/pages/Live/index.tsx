import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { io, Socket } from "socket.io-client";
import { RootState } from "../../redux";
import { Settings } from "./Settings";
import { MapView } from "../../components";

export const Live: React.FC = () => {
  const [data, setData] = useState({
    lat: 0,
    lng: 0,
    tmp: 0,
    speed: 0,
  });
  const user = useSelector((state: RootState) => state.userReducer.user);

  const socket = useRef<Socket | null>(null);

  const [showTrace, setShowTrace] = useState(false);

  const connect = useCallback(() => {
    socket.current = io("ws://localhost:4000", {
      path: "/data",
    });

    socket.current.on("connect", () => {
      console.log(socket.current?.id);
    });

    socket.current.on("server:live", (res) => {
      setData(res);
    });
  }, []);

  const disconnect = useCallback(() => {
    socket.current?.disconnect();
    socket.current = null;
  }, []);

  const getData = useCallback(() => {
    socket.current?.emit("client:getLive", {
      admin: user.role === "admin",
      id: [user.id],
    });
  }, [user.id, user.role]);

  useEffect(() => {
    connect();
    return () => disconnect();
  }, [connect, disconnect]);

  useEffect(() => {
    getData();
  }, [data, getData]);
  return (
    <MapView
      markerInfo={() => (
        <div>
          <p>{data.lat}</p>
          <p>{data.lng}</p>
          <p>{data.speed}</p>
          <p>{data.tmp}</p>
        </div>
      )}
      showPolys={showTrace}
      markers={[]}
      settings={{
        showButton: true,
        width: "250px",
      }}
    >
      <Settings setHandler={setShowTrace} state={showTrace} />
    </MapView>
  );
};
