import styled from "styled-components";

export const Label = styled.p`
  font-size: 1rem;
  color: #000000;
  font-weight: 500;
`;

export const Button = styled.button<{
  bg: string;
  width: string;
  margin: string;
}>`
  background-color: ${(p) => p.bg};
  width: ${(p) => p.width};
  margin: ${(p) => p.margin};
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${(p) => p.bg + "df"};
  }
`;
