import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getReply, addReply } from "../../redux/modules/ReplySlice";
import ReplyItem from "../molecules/ReplyItem";
import styled, { ThemeProvider } from "styled-components";
import Button from "../atoms/button"
import Rating from "../atoms/rating";
import { useParams } from "react-router-dom";
import { getBoot } from "../../redux/modules/DetailSlice";

function ReplyContent() {
  const { id } = useParams();
  console.log(id);

  const [clicked, setClicked] = useState(0);

  const [userValue, setUserValue] = useState("");
  const [commentValue, setCommentValue] = useState("");
  //사용자가 입력한 값을 저장하기 위한 state
  const replyList = useSelector((state) => state.detailSlice);

  //리덕스 스토어에서 값을 받아오기 위한 hook

  const dispatch = useDispatch();
  //리덕스스토어에 값을 넘겨주기 위한 hook

  useEffect(() => {
    dispatch(getBoot(replyList));
  }, []);

  const ReplyAdd = (e) => {
    e.preventDefault();

    if (userValue) {
      const newList = { content: commentValue, rating: clicked };
      //중요포인트 한객체안에 각각의 input값 2개 동시 저장
      dispatch(addReply(newList));
      setUserValue("");
      setCommentValue("");
    } else {
      alert("입력해주세요");
    }
  };

  return (
    <Alcoform>
      <form action="" onSubmit={ReplyAdd}>
        <FormContent>
          <Label>닉네임</Label>
          <NicInput
            type="text"
            onChange={(e) => setUserValue(e.target.value)}
            value={userValue}
            id="user"
            maxLength="6"
            placeholder="닉네임을 입력해주세요."
          />
        </FormContent>
        <FormContent>
          <Label>코멘트</Label>
          <CommentInput
            type="text"
            onChange={(e) => setCommentValue(e.target.value)}
            value={commentValue}
            id="comment"
            maxLength="20"
            placeholder="20자 이내로 간단한 후기를 작성해주세요."
          />
        </FormContent>
        <ThemeProvider
          theme={{
            palette: {
              green: "#9BFFDA",
              purple: "#FF9DFF",
              red: "#FF4646",
            },
          }}
        >
          <Button color="green" type="submit" style={{ margin: "0 0 0 8px" }}>
            추가
          </Button>
          <Rating clicked={clicked} setClicked={setClicked} />
        </ThemeProvider>
      </form>
      <ul>
        {replyList.map((data) => (
          <ReplyItem key={data.id} data={data} bootId={data.bootcampId}></ReplyItem>
        ))}
      </ul>
    </Alcoform>
  ); //return
} //ReplyList

export default ReplyContent;

const Alcoform = styled.div`
  width: 600px;
  height: 200px;
  border-bottom: 1px solid black;
  display: block;
  margin-left: auto;
  margin-right: auto;
  
  margin-bottom: 100px;
`;
const FormContent = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
`;
const Label = styled.label`
  border-radius: 20px;
  font-weight: bold;
  color: #3cfbff;
  margin: 0 0.3rem 0 0;
`;
const NicInput = styled.input`
  width: 200px;
  height: 35px;
  border-radius: 1rem;
  padding: 0.3rem;
  color: black;
`;

const CommentInput = styled.input`
  width: 481px;
  height: 35px;
  border-radius: 20px;
  padding: 0.3rem;
  color: black;
`;
