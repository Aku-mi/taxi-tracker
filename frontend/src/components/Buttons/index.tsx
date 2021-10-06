import React from "react";
import { Button, Label } from "./Elements";

interface Props {
  bg: string;
  width: string;
  margin: string;
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const Btn: React.FC<Props> = (props) => {
  return (
    <Button
      type={props.type || "button"}
      bg={props.bg}
      width={props.width}
      margin={props.margin}
      onClick={props.onClick}
    >
      <Label>{props.label}</Label>
    </Button>
  );
};
