import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

export const Home: React.FC = () => {
  const user = useSelector((state: RootState) => state.userReducer.user);
  return (
    <div>
      <h1>Home</h1>
      <p>{user.id}</p>
      <p>{user.user}</p>
      <p>{user.name}</p>
      <p>{user.lastname}</p>
      <p>{user.role}</p>
    </div>
  );
};
