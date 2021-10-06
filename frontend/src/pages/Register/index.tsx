import React from "react";
import styled from "styled-components";
import { Btn, TextInput, SelectItem } from "../../components";
import { useInputHandler } from "../../hooks";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { saveUser } from "../../redux";
import { Post } from "../../services";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Form = styled.form`
  position: absolute;
  top: calc(15%);
  left: calc(50% - 150px);
`;

interface User {
  name: string;
  lastname: string;
  user: string;
  gender: string;
  id: string;
  token: string;
  role: string;
}

export const Register: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { values, handler, clear } = useInputHandler({
    name: "",
    lastname: "",
    user: "",
    password: "",
    gender: "",
  });

  const handleSubmit = async () => {
    const res = await Post<{ ok: true; user: User }>("/auth/sign-up", values);
    if (res.data.ok) {
      dispatch(saveUser(res.data.user));
    }
  };

  return (
    <Container>
      <ReactSVG
        src="./images/shape2.svg"
        style={{
          position: "absolute",
          top: "20%",
          left: "0px",
        }}
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
          label="Name"
          width="300px"
          value={values.name}
          onChange={handler("name")}
        />
        <TextInput
          mb="20px"
          label="Last Name"
          width="300px"
          value={values.lastname}
          onChange={handler("lastname")}
        />
        <TextInput
          mb="20px"
          label="User"
          width="300px"
          value={values.user}
          onChange={handler("user")}
        />
        <TextInput
          mb="40px"
          label="Password"
          password
          width="300px"
          value={values.password}
          onChange={handler("password")}
        />
        <SelectItem
          mb="20px"
          width="300px"
          label="Gender: "
          options={[
            {
              txt: "Male",
              value: "male",
            },
            {
              txt: "Female",
              value: "female",
            },
          ]}
          value={values.gender}
          onChange={handler("gender")}
        />
        <Btn
          type="submit"
          label="Sign Up"
          width="300px"
          margin="20px 0px"
          bg={"#FF6347"}
        />
      </Form>

      <ReactSVG
        style={{
          marginTop: "-50px",
          zIndex: -3,
          width: "100%",
          transform: "scale(-1,1)",
        }}
        src="./images/shape1.svg"
      />
    </Container>
  );
};
