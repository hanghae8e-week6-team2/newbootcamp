import { useDispatch } from "react-redux";
import React, { useState, useRef } from "react";
import { updateReply, deleteReply } from "../../redux/modules/ReplySlice";
import styled, { ThemeProvider } from "styled-components";
import Button from "../atoms/Button";
import { FaStar } from "react-icons/fa";

function Replyitem({ data, bootId }) {
  //text state
  const [state, setState] = useState(data);
  const [delValue, setDelValue] = useState(bootId);

  const dispatch = useDispatch();
  const Clickref = useRef();

  const replyDelete = (e) => {
    e.preventDefault();
    dispatch(deleteReply(bootId));
  };

  const date = new Date();
  const time = date.toString();

  //비구조화 할당으로 text값 가져오기
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(state.content);
  };
  const campId = data.id;
  const bootData = { campId, content: state.content, rating: state.rating };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateReply({ bootId, bootData }));
    Clickref.current.style.display = "none";
  };

  const ClickEvent = () => {
    Clickref.current.style.display = "block";
    Clickref.current.focus();
  };

  return (
    <Reply>
      <ReplyWrap>
        <CommentArea>{data.content}</CommentArea>
        <ReviewBox>
          {/* 평점 로직 */}
          <StarContainer>
            {[1, 2, 3, 4, 5].map((el) => (
              <FaStar
                className={`fas fa-star ${data.rating >= el && "yellowStar"}`}
                key={el}
              />
            ))}
          </StarContainer>
        </ReviewBox>
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
            <Button color="green" type="button" id="reply" onClick={ClickEvent}>
              수정
            </Button>
            <Button color="red" type="button" onClick={replyDelete}>
              삭제
            </Button>
          </BtnArea>
        </ThemeProvider>
      </ReplyWrap>

      <UP_DEL ref={Clickref}>
        <form onSubmit={onSubmitHandler}>
          <Label>닉네임</Label>
          <NicInput
            type="text"
            onChange={onChangeHandler}
            value={state.id}
            id="user"
            ref={Clickref}
          />
          {/* <NicInput>{username}</NicInput> */}
          <br></br>

          <Label>코멘트수정</Label>
          <CommentInput>
            <input
              type="text"
              name="content"
              onChange={onChangeHandler}
              value={state.content}
            />
          </CommentInput>

          <ThemeProvider
            theme={{
              palette: {
                green: "#9BFFDA",
                purple: "#FF9DFF",
                red: "#FF4646",
              },
            }}
          >
            <Button
              color="green"
              type="submit"
              style={{ display: "inline-block", margin: "0 0 0 8px" }}
            >
              수정
            </Button>
          </ThemeProvider>
        </form>
      </UP_DEL>
    </Reply>
  ); //return
} //ReplyList

export default Replyitem;

const Reply = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  height: 100%;
  width: 600px;
  border-bottom: 1px solid black;
`;
const ReplyWrap = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const UserArea = styled.div`
  padding: 20px;
  width: 120px;
  height: 15px;
  border-right: 1px solid gray;
  font-size: 15px;
  font-weight: bold;
  color: black;
`;
const CommentArea = styled.div`
  display: inline-block;
  margin-left: 10px;
  font-size: 15px;
`;
const BtnArea = styled.div`
  padding: 2px;
`;

const UP_DEL = styled.div`
  width: 600px;
  height: 220px;
  border-radius: 5px;
  border: 1px solid gray;
  display: block;
  display: none;
`;

const Label = styled.label`
  float: left;
  margin: 20px 20px 0 20px;
  padding: 15px;
  border: 1px solid black;
  border-radius: 20px;
`;
const NicInput = styled.input`
  width: 200px;
  height: 50px;
  border-radius: 20px;
  margin-top: 20px;
  display: inline-block;
  font-size: 14px;
  color: black;
`;

const CommentInput = styled.div`
  width: 350px;
  height: 100px;
  margin-top: 20px;
  border-radius: 20px;
  font-size: 14px;
  color: black;
`;

const StarContainer = styled.div`
  text-align: center;
  border: none;
  background-color: white;
`;

const ReviewBox = styled.div`
  color: #999;
  font-size: 20px;
  float: right;

  i {
    margin: 20px 10px 20px 0;
    opacity: 0.1;
    cursor: pointer;
    font-size: 50px;
  }

  .yellowStar {
    color: orange;
    opacity: 1;
  }
`;
