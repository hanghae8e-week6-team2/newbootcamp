import React, { useEffect, useRef, useState } from "react";
import style from "./style.css";
import Layout from "../templates/Layout";
import Header from "../templates/Header";
import JoinForm from "../../UI/molecules/JoinForm"

const JoinPage = () => {
  return (
    <Layout>
      <Header />
      <JoinForm />
    </Layout>
  );
};
export default JoinPage;
