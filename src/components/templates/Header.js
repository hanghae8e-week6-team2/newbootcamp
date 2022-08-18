import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { test } from "../../redux/modules/LoginSlice";
import { removeCookie, getCookie } from "../../api/cookie";
import styled from "styled-components";

function Header() {
  const [데이터] = useSelector((state) => state.loginSlice.token);
  console.log(데이터);
  const [islogin, setIsLogin] = useState(데이터);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (getCookie("is_login")) {
      dispatch(test(navigate));
    }
  }, [islogin]);
  console.log(데이터);
  return (
    <Navbar
      style={{
        height: "10rem",
      }}
      bg="white"
      variant="white"
    >
      <Container>
        <Navbar.Brand href="/">
          <Img src="/logo.jpg"></Img>
          <Title> BootCamp</Title>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown title="메뉴보기" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              {데이터 === undefined ? (
                <Btn onClick={() => navigate("/user/login")}>로그인</Btn>
              ) : (
                <div>
                  <Btn
                    onClick={() => {
                      removeCookie("is_login");
                      navigate("/user/login");
                    }}
                  >
                    로그아웃
                  </Btn>
                  <NavDropdown.Item onClick={() => navigate("/create/post")}>
                    글쓰기
                  </NavDropdown.Item>
                </div>
              )}
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

const Img = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;
const Btn = styled.button`
  all: unset;
  width: 100%;
`;
const Title = styled.h2`
  display: inline;
  margin-top: 5px;
`;
