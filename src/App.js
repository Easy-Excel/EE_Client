// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Navbar";
//import Home from "./Home"; // 다른 페이지 또는 컴포넌트를 가져오세요
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 필요에 따라 추가적인 라우트를 추가하세요 */}
      </Routes>
    </Router>
  );
}

export default App;

