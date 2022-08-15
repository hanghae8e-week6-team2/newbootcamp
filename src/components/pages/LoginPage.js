import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import style from "./style.css";
import { loginDb } from "../../redux/modules/LoginSlice";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

const JoinPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const onClick = () => {
    if (id === "" || password === "") {
      alert("아이디와 비밀번호를 모두 입력해주세요");
      return;
    }
    try {
      dispatch(loginDb({ id, password }));
      //todo 디스패치로 아이디와 비밀번호 보내기
    } catch (error) {
      navigate("/user/login");
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      console.log("login error", error);
    } finally {
      //todo 메인화면으로 이동
    }
  };
  //todo 서버로부터 쿠키 받기

  return (
    <Box>
      <Header>login</Header>
      <Form>
        <Input
          name="id"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder="아이디를 입력하세요"
          required
        />
        <Input
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          placeholder="비밀번호를 입력하세요 "
          required
        />
        <Button
          variant="dark"
          style={{
            width: "10rem",
            height: "3rem",
            marginTop: "10px",
            marginBottom: "10px",
          }}
          onClick={onClick}
        >
          로그인 하기
        </Button>
        <JoinBox>
          <p>
            아직 계정이 없나요? 👉{" "}
            <Button
              variant="light"
              style={{
                width: "10rem",
                height: "3rem",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              onClick={() => {
                navigate("/user/signup");
              }}
            >
              회원가입
            </Button>
          </p>
        </JoinBox>
      </Form>
    </Box>
  );
};
export default JoinPage;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: 100%;
  border: 1px solid gainsboro;
`;
const Header = styled.h1`
  width: 40rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: 40rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid gainsboro;
`;

const Input = styled.input`
  margin: 5px;
  padding: 3px;
  border: 1px solid gainsboro;
  width: 30rem;
  height: 5rem;
  border-radius: 10px;
  margin: 10px 0px 10px 0px;
`;
const AlertBox = styled.div`
  margin: 5px;
  padding: 3px;
  width: 30rem;
  height: 5rem;
  border-radius: 10px;
  margin: 5px 0px 5px 0px;
  color: red;
`;
const JoinBox = styled.div`
  margin: 5px;
  padding: 3px;
  width: 20rem;
  height: 5rem;
  border-radius: 10px;
  margin: 10px 0px 10px 0px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogLabel = styled.label``;
