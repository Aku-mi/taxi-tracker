import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  left: 95%;
  top: 5%;
  z-index: 10;
`;

export const Settings = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(p) => p.width};
  position: absolute;
  top: calc(5% + 15px);
  left: calc(94% - ${(p) => p.width});
  z-index: 12;
  background-color: #acacac7a;
  user-select: none;
  padding: 10px;
  border-radius: 5px 0px 5px 5px;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: auto;
    right: -12px;
    top: 0px;
    bottom: auto;
    border: 6px solid;
    border-color: #acacac7a transparent transparent #acacac7a;
  }
`;
