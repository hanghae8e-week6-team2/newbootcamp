import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoot } from "../../redux/modules/DetailSlice"
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MainList = () => {
    const dispatch = useDispatch();
    const bootList = useSelector((state) => state.detailSlice);
    console.log(bootList);


    useEffect(
        () => {
            console.log("함수실행")
            dispatch(getBoot());
        }, []
    )
    const navigate = useNavigate();
    return (
        <CardArea>
            {bootList.map((boot, idx) => {
                return (
                    <Card key={idx}>
                        <Body>
                            <Title>{boot.bootcampName}</Title>
                            <Comp>{boot.bootcampCompany}</Comp>
                            <Describe>{boot.describe}</Describe>
                            <Button onClick={() => { navigate(`/post/${boot.bootcampId}`) }} variant="dark" style={{ width: '10rem' }}>상세보기</Button>
                        </Body>
                    </Card>
                )
            })
            }
        </CardArea >
    )
}


export default MainList;


const CardArea = styled.div`
    align-content: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    padding: 30px;
    line-height: 1.5;
`
const Card = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    margin-top: 30px;
    margin-left: 30px;

`

const Body = styled.div`
    padding: 10px;
    margin: 20px;
    width: 300px;
    height: 200px;
`
const Title = styled.div`
    font-size: 25px;
`

const Comp = styled.div`
    font-size: 15px;
    
    padding-top: 5px;
`
const Describe = styled.div`
    height: 50px;
   
    padding-top: 5px;
    width: 280px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
`