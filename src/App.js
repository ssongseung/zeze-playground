import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import Guide from "./page/Guide";
import "./styles/globals.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/guide" element={<Guide />} />
        <Route path="/about" element={<div>어바웃페이지임</div>} />
      </Routes>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
