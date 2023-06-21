import React from "react";
import { useDispatch } from "react-redux";
import { login , logout} from "../feature/user";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: "chirag", age: "20", email: "chirag@gmail.com" })
          );
        }}
      >
        Login
      </button>

      <button onClick={() => {dispatch(logout())}}>logout</button>
    </div>
  );
}

export default Login;
