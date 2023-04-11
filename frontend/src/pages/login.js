import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Axios from "axios";
import Form from "./form";
import "../App.css";

const Login = () => {
  const [data, setData] = useState();

  const getData = async () => {
    const response = await Axios.get("http://localhost:5001/getOracleData");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div class="home">
      <div>{data}</div>

      {/* Header */}
      <Header />
      <br />

      {/* Log-In Form */}
      <Form />
    </div>
  );
};

export default Login;
