import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import style from "./style.css";
import useInputs from "../../hooks/useInput";

const JoinPage = () => {
  const [{ id, password }, onChange, reset, toggle] = useInputs({
    id: "",
    password: "",
  });
  let loginData = { id, password };
  console.log(loginData);

  return (
    <Box>
      <Header>로그인 하기</Header>
      <Form>
        {/* // <label>아이디</label> */}
        <Input
          name="id"
          onChange={onChange}
          value={id}
          placeholder="아이디를 입력하세요"
        />
        {/* <label>비밀번호</label> */}
        <Input
          name="password"
          onChange={onChange}
          value={password}
          placeholder="비밀번호를 입력하세요 "
        />
        <AlertBox>영문, 숫자, 특수문자의 조합으로 6~20자 입니다</AlertBox>
        <Button
          variant="dark"
          style={{
            width: "10rem",
            height: "3rem",
            marginTop: "10px",
            marginBottom: "10px",
          }}
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: 50rem;
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
