import Layout from "../templates/Layout.js";
import Header from "../templates/Header.js";
import ReviewContent from "../../UI/organisms/ReviewContent";
import ReplyContent from "../../UI/organisms/ReplyContent";
import { Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoot } from "../../redux/modules/DetailSlice.js";
import Comment from "../../UI/organisms/Comment.js";

import { useParams } from "react-router-dom";

function DetailPage() {
  const dispatch = useDispatch();
  const bootList = useSelector((state) => state.detailSlice);
  console.log(bootList);
  useEffect(() => {
    dispatch(getBoot(bootList.bootcampId));
  }, []);

  const { id } = useParams();
  console.log(typeof id);

  useEffect(() => {
    dispatch(getBoot());
  }, []);

  return (
    <Layout>
      <Header />
      {bootList.map((data) => {
        if (data.bootcampId === Number(id)) {
          return (
            <div key={data.bootcampId}>
              <ReviewContent data={data} id={data.bootcampId} />
              {/* <ReplyContent id={id} /> */}
              {/* <Comment data={data}></Comment> */}
            </div>
          );
        }
      })}
    </Layout>
  );
}

export default DetailPage;
