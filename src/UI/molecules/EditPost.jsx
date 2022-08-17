import React, { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "../../UI/atoms/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, updatePost } from "../../redux/modules/AddSlice";
import useInputs from "../../hooks/useInput";

const EditPost = () => {
  //!파람스 추가해주기
  const id = 4;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nameref = useRef();
  //빈배열일때.. 어찌할꼬...
  //   useEffect(() => {
  //     dispatch(fetchPosts());
  //   }, []);
  //console.log(post);

  //!파라미터값과, 부트캠프 아이디가 일치하는 애만 가져오기 .
  const [currentClick, setCurrentClick] = useState(null);
  const [currentClick1, setCurrentClick1] = useState(null);
  const [prevClick, setPrevClick] = useState(null);
  const [prevClick1, setPrevClick1] = useState(null);
  const initialState = {
    bootcampName: "",
    bootcampCompany: "",
    totalWeeks: "",
    price: "",
    onoffLine: "",
    position: "",
    describe: "",
  };
  // const post = useSelector((state) => state).postSlice.posts;
  //const [data] = post.filter((x) => x.bootcampId === id);
  const [data] = [
    {
      bootcampName: "항해99",
      bootcampCompany: "항해99",
      totalWeeks: "1주",
      onoffLine: "1",
      price: "500만원",
      position: "3",
      describe: "설명설명",
    },
  ];
  //console.log(data.bootcampName);
  const [form, setForm] = useState(initialState);

  //! 여기부터 시작
  const [
    { bootcampName, bootcampCompany, totalWeeks, price, describe },
    onChange,
  ] = useInputs({
    bootcampName: data.bootcampName,
    bootcampCompany: data.bootcampCompany,
    totalWeeks: data.totalWeeks,
    price: data.price,
    describe: data.describe,
  });

  //! 보낼 데이터

  const editData = {
    bootcampCompany,
    bootcampName,
    describe,
    onoffline: form.onoffLine,
    position: form.position,
    price,
    totalWeeks,
  };

  ///!여기까지

  const GetClick = (e) => {
    setCurrentClick(e.target.id);
    if (e.target.id === "onoff1") {
      setForm({ ...form, onoffLine: "1" });
    } else if (e.target.id === "onoff2") {
      setForm({ ...form, onoffLine: "2" });
    }
  };
  const stackClick = (e) => {
    setCurrentClick1(e.target.id);
    if (e.target.id === "stack1") {
      setForm({ ...form, position: "1" });
    } else if (e.target.id === "stack2") {
      setForm({ ...form, position: "2" });
    } else if (e.target.id === "stack3") {
      setForm({ ...form, position: "3" });
    }
  };

  useEffect(() => {
    nameref.current.focus();
    if (currentClick !== null) {
      let current = document.getElementById(currentClick);
      console.log(current);
      current.style.color = "black";
      current.style.borderBottom = "2px solid";
      current.style.borderBottomColor = "#1c28f4";
    }

    if (prevClick !== null) {
      let prev = document.getElementById(prevClick);
      prev.style.color = "#bebcbc";
      prev.style.borderBottom = "none";
    }
    setPrevClick(currentClick); //2번째 렌더링
  }, [currentClick]);

  useEffect(() => {
    if (currentClick1 !== null) {
      let current = document.getElementById(currentClick1);
      console.log(current);
      current.style.color = "black";
      current.style.borderBottom = "2px solid";
      current.style.borderBottomColor = "#1c28f4";
    }

    if (prevClick1 !== null) {
      let prev = document.getElementById(prevClick1);
      prev.style.color = "#bebcbc";
      prev.style.borderBottom = "none";
    }
    setPrevClick1(currentClick1);
  }, [currentClick1]);

  const onClick = () => {
    dispatch(updatePost({ editData, id }));
    setForm(initialState);
    alert("게시글이 수정되었습니다..");
  };

  return (
    <>
      <LoginBox>
        <Header>부트캠프 수정</Header>
        <Form>
          <P>수정을 해주세요.😄</P>

          <Input
            required
            name="bootcampName"
            value={bootcampName}
            ref={nameref}
            onChange={onChange}
            placeholder="부트캠프명을 입력하세요"
          />

          <Input
            required
            name="bootcampCompany"
            value={bootcampCompany}
            onChange={onChange}
            placeholder="부트캠프 회사를 입력하세요 "
          />
          <Input
            required
            name="totalWeeks"
            value={totalWeeks}
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
              <p style={{ textAlign: "center" }}>온&오프라인 선택</p>
              <Button
                color="purple"
                type="button"
                id="onoff1"
                value={currentClick}
                onClick={GetClick}
              >
                온라인
              </Button>
              <Button
                color="red"
                type="button"
                id="onoff2"
                value={currentClick}
                onClick={GetClick}
              >
                오프라인
              </Button>
            </BtnArea>
          </ThemeProvider>
          <Input
            required
            name="price"
            value={price}
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
              <p style={{ textAlign: "center" }}>스텍 선택</p>
              <Button
                color="purple"
                type="button"
                id="stack1"
                value={currentClick1}
                onClick={stackClick}
              >
                백엔드
              </Button>
              <Button
                color="red"
                type="button"
                id="stack2"
                value={currentClick1}
                onClick={stackClick}
              >
                프론트엔드
              </Button>
              <Button
                color="green"
                type="button"
                id="stack3"
                value={currentClick1}
                onClick={stackClick}
              >
                풀스택
              </Button>
            </BtnArea>

            <p style={{ marginTop: "15px" }}>부트캠프에 대한 설명</p>
            <Describe
              onChange={onChange}
              name="describe"
              value={describe}
            ></Describe>
          </ThemeProvider>

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
              <Button
                color="green"
                type="button"
                onClick={onClick}
                style={{ height: "40px", width: "300px", marginBottom: "10px" }}
              >
                <span
                  style={{
                    width: "50rem",
                    height: "3rem",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  등록
                </span>
              </Button>
            </BtnArea>
          </ThemeProvider>
        </Form>
      </LoginBox>
      );
    </>
  );
};
export default EditPost;
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
  margin-top: 0px;
  padding: 3px;
  border: 1px solid gainsboro;
  width: 30rem;
  height: 20rem;
  border-radius: 10px;
`;
