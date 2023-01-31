import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import Axios from "axios";

const Layout = () => {
   const [data, setData]=useState();

  const getData=async()=>{
    const response=await Axios.get("http://localhost:5001/getData");
    setData(response.data);
  }

  useEffect(()=>{
    getData()
  }, []);
  return (
    <>
      {/* Displayed data from backend just for testing purpsoes
      <div>{data}</div> */}
      <Outlet />
    </>
  )
};

export default Layout;