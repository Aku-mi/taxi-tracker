import React, { useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link, useHistory } from "react-router-dom";
import { useHandlerShow } from "../../hooks";
import { useDispatch } from "react-redux";
import { clearUser } from "../../redux";
import {
  Nav,
  LogoContainer,
  Logo,
  Items,
  Item,
  Txt,
  Options,
} from "./Elements";

interface Props {
  items: {
    href: string;
    txt: string;
    enabled?: boolean;
  }[];
  profile?: boolean;
}

export const Navbar: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const optionsRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLLIElement | null>(null);

  const { showNode, setShowNode } = useHandlerShow(optionsRef, btnRef);

  return (
    <Nav>
      <LogoContainer>
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/"
        >
          <Logo src={"./images/logo2.png"} alt="Logo" />
        </Link>
      </LogoContainer>
      <Items>
        {props.items.map((item, i) => {
          if (item.enabled) {
            return (
              <Item key={i} className="border">
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  to={item.href}
                >
                  <Txt>{item.txt}</Txt>
                </Link>
              </Item>
            );
          }
          return null;
        })}

        {props.profile && (
          <Item ref={btnRef}>
            <IoIosAddCircleOutline
              size={25}
              onClick={() => {
                setShowNode((c) => !c);
              }}
            />
          </Item>
        )}
        {showNode && (
          <Options ref={optionsRef}>
            <button
              onClick={() => {
                dispatch(clearUser());
                setShowNode(false);
                history.push("/");
              }}
            >
              Log out
            </button>
          </Options>
        )}
      </Items>
    </Nav>
  );
};
