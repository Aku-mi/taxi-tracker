import React, { useRef } from "react";
import { Container, Icon, Settings } from "./Elements";
import { useHandlerShow } from "../../hooks";
import { IoMdSettings } from "react-icons/io";
import { Map, Props } from "./Map";

interface SettingsProps {
  settings: {
    showButton?: boolean;
    width: string;
  };
}

export const MapView: React.FC<Props & SettingsProps> = (props) => {
  const settingsRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLDivElement | null>(null);

  const { setShowNode, showNode } = useHandlerShow(settingsRef, btnRef);

  return (
    <Container>
      {showNode && (
        <Settings ref={settingsRef} width={props.settings.width}>
          {props.children}
        </Settings>
      )}
      {props.settings.showButton && (
        <Icon ref={btnRef}>
          <IoMdSettings
            size={30}
            color="#FF6347"
            onClick={() => {
              setShowNode((c) => !c);
            }}
          />
        </Icon>
      )}
      <Map {...props} />
    </Container>
  );
};
