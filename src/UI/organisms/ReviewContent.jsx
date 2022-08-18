//BootPage의 review component
import Table from "react-bootstrap/Table";
import styled, { ThemeProvider } from "styled-components";
import Button from "../../UI/atoms/Button";
import { deleteBoot } from "../../redux/modules/DetailSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//!민지수정
import EditPost from "../molecules/EditPost";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";
import { getDetail } from "../../redux/modules/JoinSlice";

function ReviewContent({ data }) {
  //use 함수를 불러오려면 컴포넌트 첫글자가 대문자여야한다.
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postData = useSelector((state) => state.joinSlice.getDetail.post);
  console.log(postData);
  const [idx, setidx] = useState("");
  //postdata.useridx === userdata.useridx
  // const userIdx = postData.userIdx;
  //test.userIdx === idx
  const userData = useSelector((state) => state.loginSlice.token);
  const [test, setTest] = useState([]);
  console.log(test);
  console.log(userData);
  console.log(postData);
  console.log(userData);
  const bootId = data.bootcampId;
  const onDelete = (e) => {
    e.preventDefault();
    dispatch(deleteBoot(bootId));
    alert("삭제가 완료되었습니다.");
    navigate("/");
  };

  ///!민지수정
  const [modal, setModal] = useState(false);
  useEffect(() => {
    setTest(...userData);
    dispatch(getDetail(bootId));
    if (postData !== undefined) {
      setidx(postData.userIdx);
    }
  }, [idx]);
  console.log(idx);
  return (
    <ReviewMain>
      {/* {test.idx === idx ? ( */}
      {/* <button onClick={() => setModal(!modal)}>수정하기</button> */}
      {/* ) : null} */}

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
            {/* {test.idx === idx ? ( */}
            <button onClick={onDelete} type="button">
              삭제
            </button>
            {/* ) : null} */}
            <button onClick={() => setModal(!modal)}>수정하기</button>
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
  width: 80%;
  font-size: 20px;
`;
const ReviewMain = styled.div`
  width: 80%;
  height: 30%;
  margin-left: auto;
  display: block;
`;

const BtnArea = styled.div`
  padding: 2px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
