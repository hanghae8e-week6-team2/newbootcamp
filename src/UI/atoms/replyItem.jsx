import { useDispatch } from "react-redux";
import React, { useState, useRef } from "react";
import { updateReply, deleteReply } from "../../redux/modules/ReplySlice";
import styled, { ThemeProvider } from "styled-components";
import Button from "./button";

function Replyitem({ userIdx,userId, comment,rating}) {
  const [userUpdate, setUserUpdate] = useState("");
  const [commentUpdate, setCommentUpdate] = useState("");
 

  const dispatch = useDispatch();
  const Clickref = useRef();

  const replyDelete = (e) => {
    e.preventDefault();
    dispatch(deleteReply(userIdx));
  };

  const date  = new Date();
  const time = date.toString();
  const replyUpdate = (e) => {
    e.preventDefault();
    if (userUpdate) {
      dispatch(
        updateReply({userIdx, userId: userUpdate, content: commentUpdate, rating:null, createAt:time  })
      );
       setUserUpdate("");
      setCommentUpdate("");
      Clickref.current.style.display = "none";
    } else alert("다시 수정해주세요");
  };

  const ClickEvent = () => {
    Clickref.current.style.display = "block";
    Clickref.current.focus();
  };

  return (
    <Reply>
      <ReplyWrap>
        <UserArea>{userId}</UserArea>
        <CommentArea>{comment}</CommentArea>
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
            <Button color="red" type="button" 
            onClick={replyDelete}
            >
              삭제
            </Button>
          </BtnArea>
        </ThemeProvider>
      </ReplyWrap>

      <UP_DEL ref={Clickref}>
        <form
        onSubmit={replyUpdate}
         >
          <Label>닉네임수정</Label>
          <NicInput
            type="text"
            onChange={(e) => setUserUpdate(e.target.value)}
            value={userId}
            id="user"
            ref={Clickref}
          />
          {/* <NicInput>{username}</NicInput> */}
          <br></br>

          <Label>코멘트수정</Label>
          <CommentInput
            type="text"
            onChange={(e) => setCommentUpdate(e.target.value)}
            value={commentUpdate}
            id="comment"
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

const CommentInput = styled.input`
  width: 350px;
  height: 100px;
  margin-top: 20px;
  border-radius: 20px;
  font-size: 14px;
  color: black;
`;