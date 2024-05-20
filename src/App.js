import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BrowserView, MobileView } from 'react-device-detect';
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
import ExtraM from "./mobile/pages/ExtraM";
import Etc from "./pages/Etc";
import Skeleton from "./pages/Skeleton";
import SkeletonMobile from "./mobile_pages/SkeletonMobile";
import FuncDetail from "./components/contents/functionPage/FuncDetail";
import Find from "./pages/Find";
import ComDetail from "./components/contents/etcPage/ComDetail";
import ChatBot from "./components/ChatBot";
import Error from "./pages/Error";
import { setErrorCode } from "./redux/errorCodeActions";
import HeaderMobile from "./moblie_components/HeaderMoblie";
import ContactM from './mobile/pages/ContactM';
import EtcM from './mobile/pages/EtcM';

function App() {
  const dispatch = useDispatch();
  const { showChatBot } = useSelector((state) => state.chatBot);
  const errorCode = 404; //예시로 404사용
  dispatch(setErrorCode(errorCode));

  return (
    <>
    <MobileView>
      <BrowserRouter>
      <HeaderMobile/>
      <Routes>
        <Route path="/contact" element={<ContactM />} />
      <Route element={<SkeletonMobile/>}/>
        <Route path="/home/extra" element={<ExtraM/>}/>
        <Route path="/home/etc" element={<EtcM/>} />
      </Routes>
      </BrowserRouter>
    </MobileView>

      <BrowserView>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/ourVision" element={<OurVision />} />
            <Route path="/ourTeam" element={<OurTeam />} />
            <Route path="/contact" element={<Contact />} />
            <Route element={<Skeleton />}>
              <Route path="/home" element={<Home />} />
              <Route path="/home/function/:content" element={<Function />} />
              <Route path="/home/category/:content" element={<Category />} />
              <Route path="/home/shortcut" element={<Shortcut />} />
              <Route path="/home/extra" element={<Extra />} />
              <Route path="/home/etc" element={<Etc />} />
              <Route path="/home/find" element={<Find />} />
              <Route path="/home/function/:content/:funcName" element={<FuncDetail />} />
              <Route path="/home/category/:content/:funcName" element={<FuncDetail />} />
              <Route path="/home/etc/frequent-functions/:etc" element={<ComDetail />} />
            </Route>

            {/* 그 나머지 경로에 대해서는 에러 처리 */}
            <Route path="*" element={<Error errorCode={errorCode} />} />
          </Routes>
          {showChatBot && <ChatBot />}
          <Footer />
        </BrowserRouter>
      </BrowserView>
    </>
  );
}

export default App;