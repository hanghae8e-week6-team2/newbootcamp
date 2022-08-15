import Layout from "../templates/Layout.js"
import Header from "../templates/Header.js";
import React, { useState } from "react";

import {Nav} from 'react-bootstrap';

import TabContent from "../../UI/atoms/tabContent.jsx";

function BootPage() {   
const [탭 ,탭변경]= useState(0);
  
    return (
        <Layout>
              <Header/>
              <Nav variant="tabs" defaultActiveKey="link-0" style={{marginLeft:"60px"}}>
                <Nav.Item>
                  <Nav.Link onClick={()=>탭변경(0)}eventKey="link-0">부트캠프 소개</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={()=>탭변경(1)} eventKey="link-1">리뷰</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent 탭={탭}/>



          
        </Layout>
    );

}



export default BootPage;





