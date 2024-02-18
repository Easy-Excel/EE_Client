import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Home from "./pages/Home";
import OurVision from "./pages/OurVision";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import Splash from "./pages/Splash";
import Footer from "./components/Footer";
import Function from "./pages/Function";
import Category from "./pages/Category";
import Shortcut from "./pages/Shortcut";
import Extra from "./pages/Extra";
import Etc from "./pages/Etc";
import Skeleton from "./pages/Skeleton";
import FuncDetail from "./components/contents/functionPage/FuncDetail";
import Find from "./pages/Find";
import ComDetail from "./components/contents/etcPage/ComDetail";
import ChatBot from "./components/ChatBot";
import Error from "./pages/Error";
import { setErrorCode } from "./redux/errorCodeActions";

function App() {
  //store에 접근하여 state 가져오기
  const dispatch = useDispatch();
  const { showChatBot } = useSelector((state) => state.chatBot);
  const errorCode = 404; //예시로 404사용
  dispatch(setErrorCode(errorCode));

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Splash />}></Route>
        <Route path="/ourVision" element={<OurVision />}></Route>
        <Route path="/ourTeam" element={<OurTeam />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

        <Route element={<Skeleton />}>
          <Route path="/home" element={<Home />}></Route>
          {/* <Route path="/home/function" element={<Function />}></Route> */}
          <Route path="/home/function/:content" element={<Function />} />

          <Route path="/home/category/:content" element={<Category />}></Route>
          <Route path="/home/shortcut" element={<Shortcut />}></Route>
          <Route path="/home/extra" element={<Extra />}></Route>
          <Route path="/home/etc" element={<Etc />}></Route>
          <Route path="/home/find" element={<Find />}></Route>
          {/* function 세부 내용 라우팅 */}
          <Route
            path="/home/function/:content/:funcName"
            element={<FuncDetail />}
          />
          <Route
            path="/home/category/:content/:funcName"
            element={<FuncDetail />}
          />
          <Route
            path="/home/etc/frequent-functions/:etc"
            element={<ComDetail />}
          />
        </Route>
        {/* {그 나머지 경로에 대해서는 에러 처리} */}
        <Route path="*" element={<Error errorCode={errorCode} />}></Route>
      </Routes>
      {showChatBot ? <ChatBot /> : null}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
