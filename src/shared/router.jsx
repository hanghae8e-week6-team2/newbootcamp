import {BrowserRouter, Route, Routes} from "react-router-dom";
import BootPage from "../components/pages/BootPage"
import Main from "../components/pages/MainPage"

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/post" element={<BootPage/>}/>
                <Route path="/" element={<Main></Main>}/>    

            </Routes>
        </BrowserRouter>
    )
}

export default Router;