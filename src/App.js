import { Routes, Route } from 'react-router-dom'
import Header from "./layouts/Header";
import './styles/globals.scss'

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/detail" element={ <div>상세페이지임</div> } />
        <Route path="/about" element={ <div>어바웃페이지임</div> } />
      </Routes>
    </div>
  );
}

export default App;
