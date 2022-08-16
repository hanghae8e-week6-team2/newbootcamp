
import React, { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "../../UI/atoms/button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addJoin } from "../../redux/modules/JoinSlice";
import { current } from "@reduxjs/toolkit";

const AddPage = () => {
  //버튼클릭시 색상유지하는 state
  const [currentClick, setCurrentClick]= useState(null);
  const [prevClick, setPrevClick] = useState(null);

  console.log(currentClick)
  console.log(prevClick)
  const [currentClick1, setCurrentClick1]= useState(null);
  const [prevClick1, setPrevClick1] = useState(null);

  //  클릭이벤트 함수
  const GetClick = (e) =>{
    setCurrentClick(e.target.id);
    
  };
  const stackClick = (e) =>{
    setCurrentClick1(e.target.id);
  };




  //  클릭이벤트 함수
 

  const navigate = useNavigate();
  const nameref = useRef();

  useEffect(() => {
    nameref.current.focus();
        if(currentClick !== null){
              let current = document.getElementById(currentClick);
              console.log(current);
                current.style.color = "black";
                current.style.borderBottom = "2px solid";
                current.style.borderBottomColor = "#1c28f4";
        }

        if(prevClick !== null){
            let prev = document.getElementById(prevClick);
            prev.style.color = "#bebcbc";
            prev.style.borderBottom = "none";
        }
        setPrevClick(currentClick); //2번째 렌더링


    
    },
    [currentClick]);

    useEffect(()=>{
        if(currentClick1 !== null){
            let current = document.getElementById(currentClick1);
            console.log(current);
              current.style.color = "black";
              current.style.borderBottom = "2px solid";
              current.style.borderBottomColor = "#1c28f4";
      }

      if(prevClick1 !== null){
          let prev = document.getElementById(prevClick1);
          prev.style.color = "#bebcbc";
          prev.style.borderBottom = "none";
      }
      setPrevClick1(currentClick1);
    },[currentClick1])


  const dispatch = useDispatch();
  //const data = useSelector((state) => state.joinSlice.joinData);

  //!초기값 생성
  const initialState = {
    id: "",
    password: "",
    confirmPassword: "",
    userName: "",
  };
  



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
    //   setJoinToggle(false);
    }
  };
  const { id, password, confirmPassword, userName } = form;
  const AddData = { id, password, confirmPassword, name: userName };

  //! 회
  const onClick = () => {
    dispatch(addJoin(AddData));
    setForm(initialState);
    alert("게시글이 등록되었습니다..");
    navigate("/");
  };

  const onBtn =  () => {

  }

  //todo 포커스 red처리

  return (
    <LoginBox>
      <Header>부트캠프 등록</Header>
      <Form>
        <P>부트캠프 등록 하는 페이지 입니다.😄</P>

        <Input
          required
          name="bootcampName"
          value={""}
          ref={nameref}
          onChange={onChange}
          placeholder="부트캠프명을 입력하세요"
        />

        <Input
          required
          name="bootcampName"
          value={""}
          onChange={onChange}
          
          placeholder="부트캠프 회사를 입력하세요 "
        />
        <Input
          required
          name="totalWeeks"
          value={""}
          onChange={onChange}
          placeholder="부트캠프의 수강기간을 입력하세요"
        />
             <ThemeProvider
          theme={{
            palette: {
              green: "#9BFFDA",
              purple: "#FF9DFF",
              red: "#FF4646",
            },
          }}
        >
          <BtnArea>
            <p style={{textAlign:"center"}}>온&오프라인 선택</p>
            <Button  color="purple" type="button" id="onOff1" onClick={GetClick}>
              온라인
            </Button>
            <Button color="red" type="button" id="onOff2" onClick={GetClick}>
              오프라인
            </Button>
          </BtnArea>
        </ThemeProvider>
        <Input
          required
          name=""
          value={""}
          onChange={onChange}
          placeholder="가격을 입력하세요"
          maxLength="7"
        />
        <ThemeProvider
          theme={{
            palette: {
              green: "#138c5f",
              purple: "#FF9DFF",
              red: "#FF4646",
            },
          }}
        >
          <BtnArea>
            <p style={{textAlign:"center"}}>스텍 선택</p>
            <Button color="purple" type="button" id="stack1" onClick={stackClick}>
              백엔드
            </Button>
            <Button color="red" type="button" id="stack2" onClick={stackClick}>
              프론트엔드
            </Button>
            <Button color="green" type="button" id="stack3" onClick={stackClick}>
              풀스택
            </Button>
          </BtnArea>

          <p style={{marginTop:"15px"}}>부트캠프에 대한 설명</p>
          <Describe></Describe>

        </ThemeProvider>
        <AlertBox>{alertBox}</AlertBox>
        <ThemeProvider
          theme={{
            palette: {
              green: "#0c6846",
              purple: "#FF9DFF",
              red: "#FF4646",
            },
          }}
        >
          <BtnArea>
            <Button color="green" type="button" 
            style={{ height:"40px",width:"300px",marginBottom:"10px"}}>
            <span  style={{
            width: "50rem",
            height: "3rem",
            fontSize:"20px",
          }}> 등록</span>      
            </Button>
          </BtnArea>
        </ThemeProvider>
     
      </Form>
    </LoginBox>
  );
};
export default AddPage;

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
  height: 3rem;
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
const BtnArea = styled.div`
  padding: 2px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Describe = styled.textarea`
  margin-top : 0px;
  padding: 3px;
  border: 1px solid gainsboro;
  width: 30rem;
  height: 20rem;
  border-radius: 10px;
`


