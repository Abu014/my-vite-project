import Screen from "./components/Screen.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header.jsx";
import PortfolioWall from "./components/PortfolioWall/ PortfolioWall.jsx";


function App() {


  return (
    <BrowserRouter basename="/my-vite-project">
        <Header />
        <Routes>
            <Route path="/" element={<Screen />} />
            <Route path="/portfolio-wall" element={<PortfolioWall />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
