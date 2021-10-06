import { useState } from "react";

type Event = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

export const useInputHandler = <T>(initialState: T) => {
  const [state, setState] = useState<T>(initialState);
  const handler = (k: keyof T) => (e: Event) => {
    setState({ ...state, [k]: e.target.value });
  };
  const clear = () => setState(initialState);
  return { values: state, handler, clear };
};
