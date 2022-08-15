import React from "react";
import style from "../../components/pages/style.css";
import Layout from "../templates/Layout";
import Header from "../templates/Header";
import LoginForm from "../../ui/molecules/LoginForm";

const LoginPage = () => {
  return (
    <Layout>
      <Header />
      <LoginForm />
    </Layout>
  );
};
export default LoginPage;
