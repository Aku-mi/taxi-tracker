import dgram from 'react-native-udp';
import { useRef } from 'react';

type K = ReturnType<typeof dgram.createSocket>;

export const useUdpSocket = () => {
  const updSocket = useRef<K>(dgram.createSocket({ type: 'udp4' }));

  return { socket: updSocket.current };
};
