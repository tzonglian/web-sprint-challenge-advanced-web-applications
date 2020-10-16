import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", login)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubblepage");
      })
      .catch((err) =>
        console.log(`Login axiosWithAuth failed: ${err.response}`)
      );
  };

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          value={props.username}
          onChange={handleChange}
          placeholder="username"
          className=""
        />
        <input
          name="password"
          type="password"
          value={props.password}
          onChange={handleChange}
          placeholder="password"
          className=""
        />
        <button>Bubble Me!</button>
      </form>
    </>
  );
};

export default Login;
