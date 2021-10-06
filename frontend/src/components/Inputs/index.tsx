import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff, IoIosArrowDown } from "react-icons/io";
import {
  Container,
  InputContainer,
  Input,
  Label,
  Span,
  Icon,
  Select,
  Txt,
  SelectContainer,
} from "./Elements";

interface Props {
  width: string;
  label: string;
  password?: boolean;
  mb: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
}

export const TextInput: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);
  return (
    <Container mb={props.mb} width={props.width}>
      <InputContainer>
        <Input
          autoComplete="off"
          type={props.password && !show ? "password" : "text"}
          required
          id={props.label}
          value={props.value}
          onChange={props.onChange}
        />
        <Label htmlFor={props.label}>
          <Span>{props.label}</Span>
        </Label>
      </InputContainer>
      {props.password && (
        <Icon onClick={() => setShow((c) => !c)}>
          {show ? <IoMdEye /> : <IoMdEyeOff />}
        </Icon>
      )}
    </Container>
  );
};

interface Props1 {
  mb: string;
  width: string;
  label: string;
  options: {
    txt: string;
    value: string;
  }[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
}

export const SelectItem: React.FC<Props1> = (props) => {
  return (
    <Container width={props.width} mb={props.mb}>
      <SelectContainer>
        <Txt>{props.label}</Txt>
        <Select onChange={props.onChange} value={props.value} required>
          <option hidden value="">
            Select One
          </option>
          {props.options.map((op, i) => (
            <option key={i} value={op.value}>
              {op.txt}
            </option>
          ))}
        </Select>
      </SelectContainer>
      <Icon inv>
        <IoIosArrowDown />
      </Icon>
    </Container>
  );
};
