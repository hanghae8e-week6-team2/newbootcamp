import React from "react";
import Layout from "../templates/Layout.js";
import Header from "../templates/Header.js";
import MainList from "../../UI/atoms/mainList.jsx";
import style from "../../components/pages/style.css";

function Main() {
  return (
    <Layout>
      <Header />
      <MainList />
    </Layout>
  );
}

export default Main;
