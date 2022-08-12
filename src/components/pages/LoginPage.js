import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const LoginPage = () => {
  return (
    <LoginBox>
      <h1>로그인 하기</h1>
      <LogInForm>
        {/* // <label>아이디</label> */}
        <LogInput name="id" placeholder="아이디를 입력하세요" />
        {/* <label>비밀번호</label> */}
        <LogInput name="pw" placeholder="비밀번호를 입력하세요 " />
        <Button
          variant="outline-dark"
          style={{
            width: "8rem",
            height: "2rem",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          로그인 하기
        </Button>
        <Button
          variant="outline-dark"
          style={{
            width: "8rem",
            height: "2rem",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          회원가입 하기
        </Button>
      </LogInForm>
    </LoginBox>
  );
};
export default LoginPage;

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: 100%;
`;

const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 30rem;
`;

const LogInput = styled.input`
  margin: 5px;
  padding: 3px;
  border: 1px solid gainsboro;
  width: 20rem;
  height: 2rem;
  border-radius: 10px;
  margin: 10px 0px 10px 0px;
`;
const LogLabel = styled.label``;
