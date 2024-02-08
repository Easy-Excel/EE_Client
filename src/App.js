import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import AtoH from "./components/contents/functionPage/AtoH";
function App() {
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
          <Route path="/home/etc/:etc" element={<ComDetail />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
