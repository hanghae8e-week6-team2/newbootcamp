//BootPage의 review component 
import styled from "styled-components";
import Table from 'react-bootstrap/Table';



function reviewContent({data}) {
   
  

 return(
    <ReviewMain>
       <ReviewTitle>
         <h1>부트캠프 소개</h1>
      </ReviewTitle>
    <ReviewBody>
    <Table striped>
         <tbody>
         <tr>
         <td>부트캠프명</td>
         <td>{data.bootcampName}</td>

         </tr>
         <tr>
         <td>부트캠프 운영회사</td>
         <td>{data.bootcampCompany}</td>

         </tr>
         <tr>
         <td>부트캠프 기간</td>
         <td colSpan={2}>{data.totalWeeks}</td>
         </tr>
         <tr>
         <td>가격</td>
         <td >{data.price}</td>
         </tr>
        
         <tr>
         <td>온&오프라인</td>
         <td >{data.onoffLine}</td>
         </tr>
         <tr>
         <td>포지션</td>
         <td>{data.position}</td>
         </tr>
         <tr>
         <td>항해99에대한 설명</td>
         <td>{data.describe}</td>
         </tr>
         </tbody>
     
        
      </Table>
      
    </ReviewBody> 
  </ReviewMain>
 )
}
export default reviewContent;

const ReviewTitle = styled.div`
   margin: 20px auto auto 0;
    display: inline-block ;
   `
const ReviewBody = styled.div`
   margin-left: 20px;
   width:80% ;
   `

const ReviewMain = styled.div `
  width :80%;
  height:30%;
 
  display:block;
  margin-left:auto;
  margin-right:auto;`