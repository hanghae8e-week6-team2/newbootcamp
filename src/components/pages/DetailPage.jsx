import Layout from "../templates/Layout.js";
import Header from "../templates/Header.js";
import reviewContent from "../../ui/atoms/reviewContent";
import replyContent from "../../ui/atoms/replyContent";

import { Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoot } from "../../redux/modules/DetailSlice";

import { useParams } from "react-router-dom";

function BootPage() {
  const dispatch = useDispatch();
  const bootList = useSelector((state) => state.detailSlice);
  console.log(bootList);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getBoot());
  }, []);

  return (
    <Layout>
      <Header />
      {bootList.map((data) => {
        if (data.bootcampId === Number(id)) {
          return (
            <>
              {" "}
              <reviewContent
                key={data.bootcampId}
                data={data}
                id={data.bootcampId}
              />{" "}
            </>
          );
        }
      })}

      <replyContent />
    </Layout>
  );
}

export default BootPage;
