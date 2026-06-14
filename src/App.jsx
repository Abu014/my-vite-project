import Screen from "./components/Screen.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header.jsx";
import PortfolioWall from "./components/PortfolioWall/ PortfolioWall.jsx";
import Docs from "./components/Documents/Docs.jsx";
import PortfolioItem from "./components/PortfolioWall/PortfolioItem/PortfolioItem.jsx";


function App() {


  return (
    <BrowserRouter basename="/my-vite-project">
        <Header />
        <Routes>
            <Route path="/" element={<Screen />} />
            <Route path="/portfolio-wall" element={<PortfolioWall />} />
            <Route path="/documents" element={<Docs/>}/>
            <Route path="/portfolio-item/:workId" element={<PortfolioItem/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
