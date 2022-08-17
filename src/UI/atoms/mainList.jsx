import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoot } from "../../redux/modules/DetailSlice"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
                            <Test>
                                <Title>{boot.bootcampName}</Title>
                                <Text>
                                    {boot.bootcampCompany}
                                </Text>
                                <Describe>{boot.describe}</Describe>
                                <Button onClick={() => { navigate(`/post/${boot.bootcampId}`) }} variant="primary" style={{ width: '16rem' }}>상세보기</Button>
                            </Test>
                        </Body>
                    </Card>
                )
            })
            }
        </CardArea>
    )
}


export default MainList;


const CardArea = styled.div`

  display: flex;
  flex-wrap: wrap;
  margin: 100px 150px
  `

const Body = styled.div`
  margin: 20px;
  justify-content: center;
`

const Test = styled.div`


`
const Title = styled.div`

`

const Text = styled.div`

`
const Describe = styled.div`
      width:100px;
      padding:0 5px;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
`