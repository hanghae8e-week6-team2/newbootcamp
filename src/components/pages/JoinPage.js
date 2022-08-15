import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import style from "./style.css";
import useInputs from "../../hooks/useInput";
import { useSelector, useDispatch } from "react-redux";
import { fetchJoin, addJoin } from "../../redux/modules/JoinSlice";

const JoinPage = () => {
  const data = useSelector((state) => state.joinSlice.joinData);
  console.log(data);
  const dispatch = useDispatch();
  const [{ id, password, confirmPassword, name }, onChange, reset, toggle] =
    useInputs({
      id: "",
      password: "",
      confirmPassword: "",
      name: "",
    });
  let joinData = { id, password, confirmPassword, name };
  console.log(joinData);
  useEffect(() => {
    dispatch(fetchJoin());
  }, []);

  const onClick = (e) => {
    // e.preventDefault();
    dispatch(addJoin(joinData));
    reset();
  };

  return (
    <LoginBox>
      <Header>회원가입 하기</Header>
      <Form>
        <P>저희 사이트는 실명제로 운영되고 있습니다😄</P>
        <JoinBox>
          {/* // <label>아이디</label> */}
          <IdInput
            name="id"
            value={id}
            onChange={onChange}
            placeholder="아이디를 입력하세요"
          />

          <Button
            variant="outline-dark"
            style={{
              width: "6rem",
              height: "3rem",
              margin: "10px ",
            }}
          >
            중복확인
          </Button>
        </JoinBox>

        {/* <label>비밀번호</label> */}
        <Input
          name="password"
          value={password}
          onChange={onChange}
          placeholder="비밀번호를 입력하세요 "
        />
        <Input
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
          placeholder="비밀번호 확인"
        />
        <Input
          name="name"
          value={name}
          onChange={onChange}
          placeholder="이름을 입력하세요"
        />
        <AlertBox>영문, 숫자, 특수문자의 조합으로 6~20자 입니다</AlertBox>
        <Button
          onClick={onClick}
          variant="dark"
          style={{
            width: "10rem",
            height: "3rem",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          회원가입 하기
        </Button>
      </Form>
    </LoginBox>
  );
};
export default JoinPage;

const LoginBox = styled.div`
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
const P = styled.p`
display:flex;
  margin: 5px;
  padding: 3px;
  width: 30rem;
  height: 1rem;
  border-radius: 10px;
  margin: 5x 0px 10px 0px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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
const IdInput = styled.input`
  margin: 5px;
  padding: 3px;
  border: 1px solid gainsboro;
  width: 20rem;
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
  width: 30rem;
  height: 5rem;
  border-radius: 10px;
  margin: 10px 0px 10px 0px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const LogLabel = styled.label``;
