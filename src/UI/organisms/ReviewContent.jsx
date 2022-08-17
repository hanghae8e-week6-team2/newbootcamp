//BootPage의 review component
import Table from "react-bootstrap/Table";
import styled, { ThemeProvider } from "styled-components";
import Button from "../../UI/atoms/Button";
import { deleteBoot } from "../../redux/modules/DetailSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//!민지수정
import EditPost from "../molecules/EditPost";
import { useState } from "react";

function ReviewContent({ data }) {
  //use 함수를 불러오려면 컴포넌트 첫글자가 대문자여야한다.
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(data.bootcampId);

  const bootId = data.bootcampId;
  const onDelete = (e) => {
    e.preventDefault();
    dispatch(deleteBoot(bootId));
    alert("삭제가 완료되었습니다.");
    navigate("/");
  };
  console.log(data);
  ///!민지수정
  const [modal, setModal] = useState(false);

  return (
    <ReviewMain>
      <button onClick={() => setModal(!modal)}>수정하기</button>
      <div>{modal ? <EditPost data={data} /> : null}</div>
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
              <td>{data.price}</td>
            </tr>

            <tr>
              <td>온&오프라인</td>
              <td>{data.onoffLine}</td>
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
        <ThemeProvider
          theme={{
            palette: {
              green: "#0c6846",
              purple: "#FF9DFF",
              red: "#FF4646",
            },
          }}
        >
          <BtnArea>
            <Button
              onClick={onDelete}
              color="green"
              type="button"
              style={{ height: "40px", width: "300px", marginBottom: "10px" }}
            >
              <span
                style={{
                  width: "50rem",
                  height: "3rem",
                  fontSize: "20px",
                }}
              >
                {" "}
                삭제
              </span>
            </Button>
          </BtnArea>
        </ThemeProvider>
      </ReviewBody>
    </ReviewMain>
  );
}
export default ReviewContent;

const ReviewTitle = styled.div`
  margin: 20px auto auto 0;
  display: inline-block;
`;
const ReviewBody = styled.div`
  margin-left: 20px;
  width: 80%;
`;

const ReviewMain = styled.div`
  width: 80%;
  height: 30%;

  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const BtnArea = styled.div`
  padding: 2px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
