import { useEffect, useRef } from "react";

declare global {
  interface Window {
    ethereum: any;
  }
}

export class Account {
  constructor() {
    if (window.ethereum === undefined) throw "Metamask not found!";
  }

  get balance() {
    return 10;
  }

  get address() {
    return "0x";
  }
}

export const useMetamask = () => {
  useEffect(() => {
    if (window.ethereum === undefined) throw "Metamask not found!";
  }, []);
};
