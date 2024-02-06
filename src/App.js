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
          <Route path="/home/function" element={<Function />}></Route>
          <Route path="/home/category" element={<Category />}></Route>
          <Route path="/home/shortcut" element={<Shortcut />}></Route>
          <Route path="/home/extra" element={<Extra />}></Route>
          <Route path="/home/etc" element={<Etc />}></Route>
          {/* function 세부 내용 라우팅 */}
          <Route path="/home/function/:funcName" element={<FuncDetail />} />
        
        </Route>
      </Routes>
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
