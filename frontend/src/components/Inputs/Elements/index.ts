import styled from "styled-components";

export const Container = styled.div<{ width: string; mb: string }>`
  position: relative;
  width: ${(p) => p.width};
  margin-bottom: ${(p) => p.mb};
`;

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
  height: 50px;
  overflow: hidden;
  & input:focus + label::after,
  & input:valid + label::after {
    transform: translateX(0%);
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  color: #000000;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: transparent;
  &:focus + label span,
  &:valid + label span {
    transform: translateY(-150%);
    font-size: 14px;
    color: #808080;
  }
`;

export const Label = styled.label`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid black;
  &::after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: -2px;
    height: 100%;
    width: 100%;
    border-bottom: 3px solid tomato;
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }
`;

export const Span = styled.span`
  position: absolute;
  bottom: 5px;
  left: 0;
  transition: all 0.3s ease;
`;

export const Icon = styled.div<{ inv?: boolean }>`
  position: absolute;
  bottom: 0;
  left: 94%;
  cursor: pointer;
  pointer-events: ${(p) => (p.inv ? "none" : "inherit")};
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;

export const Select = styled.select`
  appearance: none;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  font-size: 1rem;
  height: 30px;
  width: 78%;
  option {
    color: black;
    font-size: 1rem;
  }
  &:valid {
    border-bottom: 2px solid tomato;
  }
`;

export const Txt = styled.p`
  font-size: 1rem;
  color: #000000;
  font-weight: 500;
`;
