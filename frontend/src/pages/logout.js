import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Axios from "axios";
import Form from "./form";
import "../App.css";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";

const Logout = async () => {
  await signOut(auth);

  return (
    <div class="home">
      {/* Header */}
      <Header />
      <br />
    </div>
  );
};

export default Logout;
