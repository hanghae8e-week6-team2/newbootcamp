import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import style from "./style.css";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addJoin } from "../../redux/modules/JoinSlice";

const JoinPage = () => {
  const navigate = useNavigate();
  const nameref = useRef();
  useEffect(() => {
    nameref.current.focus();
  }, []);
  const dispatch = useDispatch();
  //const data = useSelector((state) => state.joinSlice.joinData);

  //!초기값 생성
  const initialState = {
    id: "",
    password: "",
    confirmPassword: "",
    userName: "",
  };
  const [joinToggle, setJoinToggle] = useState(true);
  const [form, setForm] = useState(initialState);
  const [alertBox, setAlertBox] = useState("");

  //! 조건을 순서대로 통과해야 버튼이 활성화
  const onChange = (e) => {
    const REGID = /^[a-zA-Z][0-9a-zA-Z]{3,9}$/;
    const REGPW =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,12}/;
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
    if (id === "" || !REGID.test(id)) {
      setAlertBox("아이디는 한글,영문 포함 4-10자입니다");
    } else if (password === "" || !REGPW.test(password)) {
      setAlertBox("비밀번호는 대소문자,숫자,특수기호 포함 6-12자 입니다");
    } else if (confirmPassword === "" || confirmPassword !== password) {
      setAlertBox("비밀번호가 일치하지 않습니다");
    } else if (userName === "" || userName.length > 7) {
      setAlertBox("이름을 확인해주세요");
    } else {
      //버튼 활성화 토글
      setJoinToggle(false);
    }
  };
  const { id, password, confirmPassword, userName } = form;
  const joinData = { id, password, confirmPassword, name: userName };

  //! 회
  const onClick = () => {
    dispatch(addJoin(joinData));
    setForm(initialState);
    alert("가입해주셔서 감사합니다.");
    navigate("/user/login");
  };

  //todo 포커스 red처리

  return (
    <LoginBox>
      <Header>signup</Header>
      <Form>
        <P>저희 사이트는 실명제로 운영되고 있습니다😄</P>

        <Input
          required
          name="id"
          value={id}
          ref={nameref}
          onChange={onChange}
          placeholder="아이디를 입력하세요"
        />

        <Input
          required
          name="password"
          value={password}
          onChange={onChange}
          type="password"
          placeholder="비밀번호를 입력하세요 "
        />
        <Input
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
          type="password"
          placeholder="비밀번호 확인"
        />
        <Input
          required
          name="userName"
          value={userName}
          onChange={onChange}
          placeholder="이름을 입력하세요"
          maxLength="7"
        />
        <AlertBox>{alertBox}</AlertBox>
        <Button
          onClick={onClick}
          variant="dark"
          disabled={joinToggle}
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

const Form = styled.div`
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
  display: flex;
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

const AlertBox = styled.div`
  margin: 5px;
  padding: 3px;
  width: 30rem;
  height: 5rem;
  border-radius: 10px;
  margin: 5px 0px 5px 0px;
  color: red;
`;

const LogLabel = styled.label``;
