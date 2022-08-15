import styled from "styled-components";

import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getReply} from "../../redux/modules/ReplySlice";

function ReplyContent() {

  const replyList = useSelector((state) => state.replySlice);
  console.log(replyList);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReply()) //
}, []);
  



    return (
        <ReplyMain>
          <Bootform>
              1234
          </Bootform>    
        </ReplyMain>

    )
}

export default ReplyContent

const ReplyMain = styled.div `
  margin-left:60px ;
  margin-top:10px;
 `



const Bootform = styled.div `
  width: 100%;
  height: 100%;
  border: 1px soild black;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`;

