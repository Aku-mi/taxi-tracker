import React from "react";
import styled from "styled-components";
import { useInputHandler } from "../../hooks";
import { TextInput, Btn } from "../../components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { saveUser } from "../../redux";
import { Post } from "../../services";

interface User {
  name: string;
  lastname: string;
  user: string;
  gender: string;
  id: string;
  token: string;
  role: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Form = styled.form`
  position: absolute;
  top: 31%;
  left: calc(50% - 150px);
`;

export const Login: React.FC = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { values, handler, clear } = useInputHandler({
    user: "",
    password: "",
  });

  const handleSubmit = async () => {
    const res = await Post<{ ok: true; user: User }>("/auth/sign-in", values);
    if (res.data.ok) {
      dispatch(saveUser(res.data.user));
    }
  };

  return (
    <Container>
      <ReactSVG
        style={{
          marginTop: "-50px",
          zIndex: -3,
          width: "100%",
        }}
        src="./images/shape1.svg"
      />
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          await handleSubmit();
          clear();
          history.push("/");
        }}
      >
        <TextInput
          mb="20px"
          label="User"
          width="300px"
          value={values.user}
          onChange={handler("user")}
        />
        <TextInput
          mb="20px"
          label="Password"
          password
          width="300px"
          value={values.password}
          onChange={handler("password")}
        />
        <Btn
          type="submit"
          label="Sign In"
          width="300px"
          margin="20px 0px"
          bg={"#FF6347"}
        />
      </Form>
      <ReactSVG
        src="./images/shape2.svg"
        style={{
          position: "absolute",
          top: "20%",
          left: "80%",
        }}
      />
    </Container>
  );
};
