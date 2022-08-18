import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getReply, addReply } from "../../redux/modules/ReplySlice";
import ReplyItem from "../molecules/ReplyItem";
import styled, { ThemeProvider } from "styled-components";
import Button from "../atoms/Button";
import Rating from "../atoms/Rating";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Comment = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //!댓글 보여주기
  const 데이터 = useSelector(
    (state) => {
      return state.joinSlice.getDetail;
    },
    (a, b) => {
      console.log("eq");
      return a === b;
    }
  );
  const [commentData, setCommentData] = useState(데이터);
  console.log("데이터", commentData);
  console.log(commentData);
  const { id } = useParams();
  console.log(id);
  const [clicked, setClicked] = useState(0);
  const [userValue, setUserValue] = useState("1234");
  const [commentValue, setCommentValue] = useState("");
  const replyList = useSelector((state) => state.replySlice);

  useEffect(() => {
    dispatch(getReply());
  }, []);
  const ReplyAdd = (e) => {
    e.preventDefault();

    if (userValue) {
      const newList = { content: commentValue, rating: clicked };
      console.log(newList);
      //중요포인트 한객체안에 각각의 input값 2개 동시 저장
      dispatch(addReply(newList));
      setUserValue("");
      setCommentValue("");
    } else {
      alert("입력해주세요");
    }
  };

  return (
    <div>
      <hr />
      <Alcoform>
        <form action="" onSubmit={ReplyAdd}>
          <FormContent></FormContent>
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
        <hr />
        <ul>
          {commentData === "댓글이 없습니다." ||
          commentData === null ||
          commentData === undefined ? (
            <div>댓글이 없습니다.</div>
          ) : (
            commentData.map((data, i) => (
              <ReplyItem
                key={i}
                data={data}
                bootId={data.bootcampId}
              ></ReplyItem>
            ))
          )}
        </ul>
      </Alcoform>
    </div>
  );
};

export default Comment;
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
