import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import OurVision from "./pages/OurVision";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import Splash from "./pages/Splash";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Splash />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/ourVision" element={<OurVision />}></Route>
        <Route path="/ourTeam" element={<OurTeam />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
