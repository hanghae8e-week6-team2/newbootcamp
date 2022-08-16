import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoot } from "../../redux/modules/DetailSlice";
import Layout from "../templates/Layout.js";
import Header from "../templates/Header.js";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Main() {
  const dispatch = useDispatch();
  const bootList = useSelector((state) => state.detailSlice);
  console.log(bootList);

  useEffect(() => {
    dispatch(getBoot());
  }, []);
  const navigate = useNavigate();

  return (
    <Layout>
      <Header />
      {[...bootList].map((boot) => {
        return (
          <CardArea>
            <Card style={{ width: "18rem" }} key={boot.bootcampId}>
              <Card.Img
                variant="top"
                src="data:image/jpeg;base64,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"
              />
              <Card.Body>
                <Card.Title>{boot.bootcampName}</Card.Title>
                <Card.Text>{boot.bootcampCompany}</Card.Text>
                <Button
                  onClick={() => {
                    navigate(`/post/${boot.bootcampId}`);
                  }}
                  variant="primary"
                  style={{ width: "16rem" }}
                >
                  상세보기
                </Button>
              </Card.Body>
            </Card>
          </CardArea>
        );
      })}
    </Layout>
  );
}

export default Main;

const CardArea = styled.div`
  width: 400px;
  height: 300px;
  margin: 20px 10px;
`;
