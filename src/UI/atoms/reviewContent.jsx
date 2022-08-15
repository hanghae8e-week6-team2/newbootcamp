//BootPage의 review component 
import styled from "styled-components";
import Table from 'react-bootstrap/Table';
function reviewContent() {
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
         <td>항해99 8기</td>

         </tr>
         <tr>
         <td>부트캠프 운영회사</td>
         <td>스파르타코딩클럽</td>

         </tr>
         <tr>
         <td>부트캠프 기간</td>
         <td colSpan={2}>99일</td>
         </tr>
         <tr>
         <td>부트캠프 비용</td>
         <td >선결재시 400만원 후불시 500만원</td>
         </tr>
         <tr>
         <td>온&오프라인</td>
         <td >온라인</td>
         </tr>
         <tr>
         <td>포지션</td>
         <td>프론트엔드</td>
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
  height:42%;
 
  display:block;
  margin-left:auto;
  margin-right:auto;`