import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getBoot} from "../../redux/modules/DetailSlice"
import Layout from "../templates/Layout.js"
import Header from "../templates/Header.js";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

function Main() {
  const dispatch = useDispatch();
  const bootList = useSelector((state)=> state.mainSlice)
  console.log(bootList);
 
  useEffect(
    ()=>{
      dispatch(getBoot());  
    },[]
  )
   const navigate = useNavigate();

  return ( 
    
  <Layout>
    
    <Header/>
    {
      bootList.map((boot)=>{
       return(
        <CardArea key={boot.bootcampId} >
        <Card  style={{ width: '18rem' }}>
              <Card.Img variant="top"  />
              <Card.Body>
                <Card.Title>{boot.bootcampName}</Card.Title>
                <Card.Text>
                  {boot.bootcampCompany}
                </Card.Text>
                <Button onClick={()=>{navigate(`/post/${boot.bootcampId}`)}} variant="primary" style={{ width: '16rem' }}>상세보기</Button>
              </Card.Body>
        </Card>
        </CardArea>
       )
        
      })
    }
   
  </Layout>);


}

export default Main;

const CardArea = styled.div`
  width:400px;
  height: 300px;
  margin: 20px 10px;
  `