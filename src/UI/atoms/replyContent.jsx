import styled from "styled-components";
import ReplyItem from "./replyItem";
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {getReply} from "../../redux/modules/ReplySlice";

function ReplyContent() {
  const [userValue, setUserValue] = useState();
  const [commentValue, setCommentValue] = useState();


  const replyList = useSelector((state) => state.replySlice);
  console.log(replyList);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReply()) //
}, []);
  



    return (
        <ReplyMain>
          <form action="" 
          // onSubmit={ReplyAdd}
          >
            <FormContent>
              <Label>닉네임</Label>
              
              <NicInput
               type="text"
               onChange={(e) => setUserValue(e.target.value)}
               value={userValue}
               id="user"
               maxLength =   "6"
               placeholder="닉네임을 입력해주세요"
               />
            </FormContent>
              <FormContent>
              <Label>댓글작성</Label>
              
              <ReplyInput
               type="text"
               onChange={(e) => setUserValue(e.target.value)}
               value={userValue}
               id="user"
               maxLength =   "6"
               placeholder="댓글을 입력해주세요"
               />
            </FormContent>

          </form>
           <ReplyItem/>
           
        </ReplyMain>

    )
}

export default ReplyContent

const ReplyMain = styled.div `
  width : 80%;
  height : 120px;
  border : 1px solid black;
  display: block ;
  margin-left:auto;
  margin-right:auto ;
 `

const FormContent = styled.div`
  display:inline-flex;
  align-items:center;
  margin: 0.5rem 0;
  width:700px;`

const Label = styled.label`
   border-radius: 20px;
   font-weight:bold;
   color:black;
   margin: 0 0.3rem 0 20px;`

const NicInput = styled.input`
 width: 481px;
 height: 35px;
 border-radius: 20px;
 padding: 0.3rem;
 color: black;
 margin-right:475px;`

const ReplyInput = styled.input`
 width:2000px ;
 height: 35px;
 border-radius: 20px;
 padding: 0.3rem;
 color: black;
 margin-right:400px;`