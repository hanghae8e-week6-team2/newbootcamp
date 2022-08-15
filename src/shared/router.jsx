import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "../components/pages/DetailPage";
import LoginPage from "../components/pages/LoginPage";
import Main from "../components/pages/MainPage";
import JoinPage from "../components/pages/JoinPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/post/:id" element={<DetailPage />} />
        <Route path="/" element={<Main></Main>} />
        <Route path="/user/login" element={<LoginPage></LoginPage>} />
        <Route path="/user/signup" element={<JoinPage></JoinPage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
