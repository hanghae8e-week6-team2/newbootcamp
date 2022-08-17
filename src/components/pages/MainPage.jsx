import React from "react";
import Layout from "../templates/Layout.jsx";
import Header from "../templates/Header.jsx";
import MainList from "../../UI/molecules/MainList.jsx";
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
