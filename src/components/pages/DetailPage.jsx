import Layout from "../templates/Layout.jsx";
import Header from "../templates/Header.jsx";
import ReviewContent from "../../UI/organisms/ReviewContent";
import ReplyContent from "../../UI/organisms/ReplyContent";
import { Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoot } from "../../redux/modules/DetailSlice";

import { useParams } from "react-router-dom";

function DetailPage() {
  const dispatch = useDispatch();
  const bootList = useSelector((state) => state.detailSlice);

  useEffect(() => {
    dispatch(getBoot());
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
              <ReplyContent id={id} />
            </div>
          );
        }
      })}
    </Layout>
  );
}

export default DetailPage;
