import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import CoinsPage from "./pages/Coins";
import './App.css';
import DashboardPage from "./pages/DashboardPage";
import ComparePage from "./pages/Compare";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/DashboardPage" element={<DashboardPage />} />
          <Route path="/Coins/:id" element={<CoinsPage />} />
          <Route path="/Compare" element={<ComparePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
