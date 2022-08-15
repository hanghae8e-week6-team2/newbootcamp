import Layout from "../templates/Layout.js"
import Header from "../templates/Header.js";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostAysnc } from "../../redux/modules/MainSlice.js";
import style from "./style.css";
import {
  List,
  ListWrap,
  Name,
  Company,
  Weeks,
  OnOff,
  Price,
  Position,
  Describe
} from "../../UI/organisms/MainStyle"
import { Link } from "react-router-dom";
function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostAysnc());
  }, [])

  // const postData = useSelector ((state) => state.Post.data)

  return (
    <Layout>
      <Header />
      <ListWrap>
        <List>
          {/* {postData?.map((post) => {
          return (
            <Link to {`/bootpage/${post.postId}`}> */}
          <Name>부트캠프이름</Name>
          <Company>부트캠프회사</Company>
          <Weeks>기간</Weeks>
          <OnOff>온/오프라인</OnOff>
          <Price>가격</Price>
          <Position>포지션</Position>
          <Describe>설명</Describe>
          {/* </Link>
          )
        })} */}
        </List>
      </ListWrap>
    </Layout>);


}

export default Main;