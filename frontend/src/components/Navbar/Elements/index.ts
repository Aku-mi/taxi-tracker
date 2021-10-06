import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 40px;
  background-color: tomato;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 70px;
  z-index: 10;

  @media (max-width: 768px) {
    .border {
      border-bottom: none;
    }
    flex-direction: column;
    padding: 0px 10px;
    height: 100%;
  }
`;

export const Txt = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  cursor: pointer;
  user-select: none;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  height: 100%;
  user-select: none;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 0px;
    position: relative;

    &::after {
      content: "Use Desktop Version";
      position: absolute;
      top: auto;
      right: 0;
    }
  }
`;

export const Logo = styled.img`
  width: 25px;
  height: 30px;
  margin: 2px;
  cursor: pointer;
`;

export const Items = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    background-color: red;
    width: 100%;
    transform: scale(1);
    transform-origin: top;
    transition: transform 400ms ease-in-out;
    display: none;
  }
`;

export const Item = styled.li`
  list-style: none;
  margin: 0px 10px;

  &:last-of-type {
    margin: 0px 0px 0px 10px;
  }
  &.border:hover {
    border-bottom: 2px solid #acacac;
  }

  @media (max-width: 768px) {
    &.border:hover {
      border-bottom: none;
    }

    &:last-of-type {
      margin: 0px 0px 0px 0px;
    }

    margin: 0px;
    padding: 4px;
  }
`;

export const Options = styled.div`
  position: absolute;
  top: 50px;
  left: auto;
  right: 53px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 10px 10px 10px;
  background-color: #acacac7a;
  width: 150px;
  height: 200px;
  z-index: 100;
  border-radius: 5px;
  user-select: none;

  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: auto;
    right: 20px;
    bottom: auto;
    border: 10px solid;
    border-color: transparent transparent #acacac7a transparent;
  }
`;
