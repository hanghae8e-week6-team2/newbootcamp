import styled from "styled-components";
import React from "react";


function Layout({children}) {
  return <StLayout>{children}</StLayout>
}

export default Layout;

const StLayout = styled.div`
/* border: 1px solid black; */
max-width:1920px;
min-width:1200px;
height:820px;`