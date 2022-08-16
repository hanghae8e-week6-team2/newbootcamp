import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { test } from "../../redux/modules/LoginSlice";
import { removeCookie, getCookie } from "../../api/cookie";

function Header() {
  const userId = useSelector((state) => state.loginSlice.token);
  const [islogin, setIsLogin] = useState(userId);
  console.log(userId);
  console.log(islogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (getCookie("is_login")) {
      dispatch(test(navigate));
    }
  }, [islogin]);
  return (
    <Navbar bg="white" variant="white">
      <Container>
        <Navbar.Brand href="/">BootCamp</Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          {userId === undefined || userId === "" ? (
            <button onClick={() => navigate("/user/login")}>로그인</button>
          ) : (
            <div>
              {" "}
              <div>{userId}님 환영합니다. </div>
              <button
                onClick={() => {
                  removeCookie("is_login");
                  console.log(islogin);
                  navigate("/user/login");
                }}
              >
                로그아웃
              </button>
            </div>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
