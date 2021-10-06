import React from "react";
import { Btn } from "../../components";

interface Props {
  state: boolean;
  setHandler: (c: boolean | ((k: boolean) => boolean)) => void;
}

export const Settings: React.FC<Props> = ({ setHandler, state }) => {
  return (
    <>
      <p
        style={{
          margin: 10,
          fontWeight: 500,
        }}
      >
        Settings
      </p>
      <Btn
        bg="#FF6347"
        label={!state ? "Show Trace" : "Hide Trace"}
        margin="2px"
        width="230px"
        onClick={() => {
          setHandler((c) => !c);
        }}
      />
    </>
  );
};
